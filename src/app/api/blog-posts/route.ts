import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOG_POSTS_FILE = path.join(process.cwd(), 'src/data/blog-posts.json');

// Helper function to read blog posts
function readBlogPosts() {
  try {
    const data = fs.readFileSync(BLOG_POSTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write blog posts
function writeBlogPosts(posts: any[]) {
  fs.writeFileSync(BLOG_POSTS_FILE, JSON.stringify(posts, null, 2));
}

export async function GET() {
  const posts = readBlogPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const post = await request.json();
    const posts = readBlogPosts();

    // Generate a new ID
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;

    const newPost = {
      ...post,
      id: newId,
      date: new Date().toISOString().split('T')[0],
    };

    posts.push(newPost);
    writeBlogPosts(posts);

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
} 