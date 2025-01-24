"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";
import { Button } from "./ui/button";

export default function NavLinks() {
  return (
    <div>
      <Button>
        <LoginLink>login</LoginLink>
      </Button>
    </div>
  );
}
