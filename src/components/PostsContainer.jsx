import axios from "axios";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const fetchPost = async () => {
  try {
    // Server-side Post fetching
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
export default async function PostsContainer() {
  const data = await fetchPost();
  const data2 = data.slice(0, 12);
  return (
    <div className="px-5">
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data2.map((post) => (
          <div className="space-y-4 rounded-lg border px-3 py-5" key={post?.id}>
            <p className="line-clamp-1 text-2xl font-medium">{post.title}</p>
            <p className="line-clamp-2 opacity-80">{post.body}</p>
            <Button>
              <Link href={`/blog/${post?.id}`}>Details</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button>
          <Link href={`/allpost`}>All blogs</Link>
        </Button>
      </div>
    </div>
  );
}
