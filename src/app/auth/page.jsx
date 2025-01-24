"use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center gap-5">
      <LoginLink>login</LoginLink>
      <RegisterLink>signUp</RegisterLink>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}
