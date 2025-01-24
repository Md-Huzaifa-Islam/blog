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
    <div>
      {data && (
        <div>
          <p className="">{data.title}</p>
          <p className="">{data.body}</p>
        </div>
      )}
    </div>
  );
}
