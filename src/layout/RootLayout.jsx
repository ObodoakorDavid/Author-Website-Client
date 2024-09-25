import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className=" bg-slate-50 min-h-dvh">
      <div className="max-w-[1280px] m-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
