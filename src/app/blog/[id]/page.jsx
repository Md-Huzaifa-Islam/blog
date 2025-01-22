"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  //   {
  //     userId: 3,
  //     id: 21,
  //     title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
  //     body: 'repellat aliquid praesentium dolorem quo\n' +
  //       'sed totam minus non itaque\n' +
  //       'nihil labore molestiae sunt dolor eveniet hic recusandae veniam\n' +
  //       'tempora et tenetur expedita sunt'
  //   },
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
