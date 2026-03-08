import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export async function StaticP() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-1 p-8">
            <h1 style={{ margin: "20px 0", fontSize: "1.5rem", textAlign:"center" }}>{post.title}</h1>
            <p>{post.body}</p>
            <p style={{ margin: "20px 0" }}>Posted by User {post.userId}</p>
        </div>
        <Link className="mb-200" href="/posts">← Back to Posts</Link>
    </div>
  );
}