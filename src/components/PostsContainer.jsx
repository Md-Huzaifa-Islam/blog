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
export default async function PostsContainer() {
  const data = await fetchPost();

  return (
    <div>
      <div className="">
        {data.map((post) => (
          <div
            className="w-max rounded-lg border border-white p-10"
            key={post?.id}
          >
            <p>{post.title}</p>
            <Link href={`/blog/${post?.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
