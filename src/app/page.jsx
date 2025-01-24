import PostsContainer from "@/components/PostsContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-20 space-y-6 pt-10">
      <p className="text-center text-4xl">These are our recent blogs</p>
      <PostsContainer />
    </div>
  );
}
