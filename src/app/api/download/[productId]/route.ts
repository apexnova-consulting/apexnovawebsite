import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import productsData from '@/data/products.json';
import fs from 'fs';
import path from 'path';
import { verifyStripeSession } from '@/lib/stripe';

const { products } = productsData;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

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
    const filePath = path.join(process.cwd(), 'public', product.filePath);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', `attachment; filename="${product.title}.pdf"`);

    // Create response with file content
    const response = new NextResponse(fileBuffer, {
      headers,
    });

    return response;
  } catch (error) {
    console.error('Error downloading file:', error);
    return NextResponse.json(
      { error: 'Error downloading file' },
      { status: 500 }
    );
  }
} 