import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Template = ({ children }) => {
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
