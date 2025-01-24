import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function page() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <div>
      <p className="text-center text-5xl font-semibold">
        Welcome to your profile!
      </p>
      {!isUserAuthenticated && <p>user is in</p>}
    </div>
  );
}
