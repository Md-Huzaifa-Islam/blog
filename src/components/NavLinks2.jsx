"use client";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";
import { Button } from "./ui/button";

export default function NavLinks2() {
  return (
    <div className="">
      <Button>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  );
}
