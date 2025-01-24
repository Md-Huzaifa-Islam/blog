import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React from "react";

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
export default async function page() {
  const data = await fetchPost();
  return (
    <div className="mb-20 mt-10 space-y-10 px-5">
      <p className="text-center text-4xl">These are our all blogs</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((post) => (
          <div
            className="space-y-2 rounded-lg border px-2 py-5 md:space-y-4 md:px-3"
            key={post?.id}
          >
            <p className="line-clamp-1 text-xl font-medium md:text-2xl">
              {post.title}
            </p>
            <p className="line-clamp-2 text-sm opacity-80 md:text-base">
              {post.body}
            </p>
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
