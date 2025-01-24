import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";
import NavLinks from "./NavLinks";
import NavLinks2 from "./NavLinks2";

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="mt-4 grid grid-cols-3 px-5">
      <div></div>
      <div className="justify-self-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-4">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/allpost" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All blogs
                </NavigationMenuLink>
              </Link>
              <Link href="/profile" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="justify-self-end">
        {isUserAuthenticated ? <NavLinks2 /> : <NavLinks />}
      </div>
    </div>
  );
}
