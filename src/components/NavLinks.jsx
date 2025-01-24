"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default function NavLinks() {
  return (
    <div className="flex items-center gap-5">
      <LoginLink>login</LoginLink>
    </div>
  );
}
