import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <div className="max-w-[1280px] w-full m-auto flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow full">
          <div className=" max-w-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
