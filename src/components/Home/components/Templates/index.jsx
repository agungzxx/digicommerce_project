"use client";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePathname } from "next/navigation";

export const Template = ({ children }) => {
  const path = usePathname();
  if (path === "/login" || "/join") {
    return (
      <main className="flex justify-center h-screen items-center">
        {children}
      </main>
    );
  }
  return (
    <main className="flex flex-col justify-between min-h-screen max-w-6xl m-auto">
      <section className="space-y-6">
        <Header />
        <main className="p-6">{children}</main>
      </section>
      <Footer />
    </main>
  );
};
