import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p
          className={cn("text-lg text-neutral-700 mt-[3px]", headingFont.className)}
        >
          Tasket
        </p>
      </div>
    </Link>
  );
};

export default Logo;
