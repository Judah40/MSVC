import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLink from "./NavLinks";
function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 p-10 items-center">
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-4xl text-center">msvc</h1>
        </Link>
      </div>

      <div>
        {/* NavLink */}

        <NavLink />
      </div>
    </header>
  );
}

export default Header;
