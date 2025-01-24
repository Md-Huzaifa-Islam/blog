"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="px-5 py-10 md:py-14 lg:py-20">
      {data && (
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10">
          <p className="text-3xl md:text-4xl lg:text-5xl">{data.title}</p>
          <p className="text-lg md:text-xl lg:text-2xl">{data.body}</p>
        </div>
      )}
    </div>
  );
}
