import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products.json';
import { headers } from 'next/headers';
import { verifyStripeSession } from '@/lib/stripe';

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    // Get the session ID from the query parameters
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'No session ID provided' },
        { status: 400 }
      );
    }

    // Verify the Stripe session
    const session = await verifyStripeSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    // Find the product
    const product = products.find((p) => p.id === params.productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Verify the purchase
    const purchasedProductId = session.metadata?.productId;
    if (purchasedProductId !== product.id) {
      return NextResponse.json(
        { error: 'Product not purchased' },
        { status: 403 }
      );
    }

    // Get the file path
    const filePath = product.downloadUrl;
    if (!filePath) {
      return NextResponse.json(
        { error: 'Download URL not found' },
        { status: 404 }
      );
    }

    // Read the file
    const file = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${filePath}`);
    if (!file.ok) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Get the file content and headers
    const fileContent = await file.arrayBuffer();
    const fileHeaders = file.headers;

    // Create response with file content
    const response = new NextResponse(fileContent, {
      headers: {
        'Content-Type': fileHeaders.get('content-type') || 'application/pdf',
        'Content-Disposition': `attachment; filename="${filePath.split('/').pop()}"`,
        'Content-Length': fileHeaders.get('content-length') || '',
      },
    });

    return response;
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 