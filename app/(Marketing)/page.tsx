import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase font-semibold">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task Managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Tasket helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          Work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl mt-4 max-w-xs md:max-w-2xl text-center text-neutral-400 mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. from
        high rises to the home office, the way your team works is unique -
        accomplish it all with Tasket.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Tasket for free</Link>
      </Button>
    </div>
  );
};

export default page;
