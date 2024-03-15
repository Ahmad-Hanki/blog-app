import Link from "next/link";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
const Header = () => {
  return (
    <header className="bg-blue-500 p-4 ">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href={"/"} className="text-white text-2xl font-bold ">
          My Blogs
        </Link>
        <ul className="flex space-x-4">
          <li className=" ">
            <LoginLink className="text-white hover:underline">LogIn</LoginLink>
          </li>
          <li>
            <Link className="text-white hover:underline" href={"/blogs"}>
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
