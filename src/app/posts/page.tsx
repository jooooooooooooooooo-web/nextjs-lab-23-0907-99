import Link from "next/link";
import { Suspense } from "react";
import SlowData from "../components/SlowData";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function PostsPage() {
  const sends = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }
  });
  const posts: Post[] = await sends.json();

  return (
  <div>
    <ul>
        {posts.slice(0, 10).map((post) => (            
            <li style={{ margin: "15px 0", textAlign: "center" }} key={post.id}>
                <Link href={`/posts/${post.id}`}>
                <h2 style={{ fontSize: "1.5rem" }}>{post.title}</h2>
                </Link>
                <p>{post.body.slice(0, 100)}...</p>
                </li>
            ))}
            </ul>
            <Suspense fallback={<p>Loading...</p>}>
                <SlowData />
            </Suspense>
    </div>
  );
}