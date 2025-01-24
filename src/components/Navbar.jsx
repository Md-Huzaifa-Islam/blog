import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="flex items-center justify-between">
      <p>Home</p>
      <Link href={"/profile"}>Profile section</Link>
    </div>
  );
}
