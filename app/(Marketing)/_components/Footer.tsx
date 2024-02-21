import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Footer = () =>{
  return (
    <div className="fixed bottom-0 w-full p-3 border-t bg-slate-100">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size={"sm"} variant={"ghost"} className="font-semibold">Privacy Policy</Button>
          <Button size={"sm"} variant={"ghost"} className="font-semibold">Terms of Service</Button>
        </div>
      </div>
    </div>
  );
};
