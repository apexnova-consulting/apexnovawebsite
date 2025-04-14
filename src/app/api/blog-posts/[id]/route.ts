import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

const BLOG_POSTS_FILE = path.join(process.cwd(), 'src/data/blog-posts.json');

// Helper function to read blog posts
function readBlogPosts(): BlogPost[] {
  try {
    const data = fs.readFileSync(BLOG_POSTS_FILE, 'utf8');
    return JSON.parse(data).posts || [];
  } catch (error) {
    return [];
  }
}

// Helper function to write blog posts
function writeBlogPosts(posts: BlogPost[]) {
  fs.writeFileSync(BLOG_POSTS_FILE, JSON.stringify({ posts }, null, 2));
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const posts = readBlogPosts();
  const post = posts.find((p: BlogPost) => p.id === parseInt(params.id));

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updatedPost = await request.json();
    const posts = readBlogPosts();
    const index = posts.findIndex((p: BlogPost) => p.id === parseInt(params.id));

    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    posts[index] = { ...posts[index], ...updatedPost };
    writeBlogPosts(posts);

    return NextResponse.json(posts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const posts = readBlogPosts();
    const filteredPosts = posts.filter((p: BlogPost) => p.id !== parseInt(params.id));

    if (filteredPosts.length === posts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    writeBlogPosts(filteredPosts);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
} 