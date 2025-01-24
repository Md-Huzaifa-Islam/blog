"use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default function NavLinks2() {
  return (
    <div className="flex items-center gap-5">
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}
