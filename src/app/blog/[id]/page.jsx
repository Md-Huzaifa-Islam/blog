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
    <div className="px-5 py-20">
      {data && (
        <div className="flex flex-col gap-10">
          <p className="text-5xl">{data.title}</p>
          <p className="text-2xl">{data.body}</p>
        </div>
      )}
    </div>
  );
}
