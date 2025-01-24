import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  // Redirect to /auth if the user is not authenticated
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div>
      <p className="text-center text-5xl font-semibold">
        Welcome to your profile!
      </p>
    </div>
  );
}
