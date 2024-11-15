import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  const [showIntro, setShowIntro] = useState(true);

  const handleGetStarted = () => {
    setShowIntro(false);
  };

  return (
    <div
      className={`bg-slate-50 min-h-screen flex flex-col overflow-hidden ${
        showIntro ? " max-h-dvh" : ""
      }`}
    >
      {showIntro && (
        <div
          className={`absolute bg-primary-600 inset-0 z-50 bg-cover bg-center flex items-center justify-center transition-transform duration-700 h-screen max-h-dvh`}
          style={{
            backgroundImage: "url('/path-to-your-image.jpg')",
            transform: showIntro ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <div className="flex flex-col gap-8 items-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                G.T. DÍPÈ: Writing love stories that hold both the beauty and
                the bravery of real life.
              </h1>
              <p className="text-lg mb-6">
                For hearts that find strength in both love and reality…
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-primary-900 hover:bg-primary-800 text-white px-6 py-3"
              >
                GET IN TOUCH
              </button>
            </div>
            <div className=" flex flex-col gap-6">
              <h2 className=" text-3xl font-semibold text-white">
                JOIN MY READER LIST
              </h2>
              <form action="" className="flex flex-col gap-6">
                <input
                  type="name"
                  placeholder="Email"
                  className="p-2 bg-transparent border-2 outline-0 caret-slate-400 text-slate-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 bg-transparent border-2 outline-0 caret-slate-400 text-slate-600"
                />
                <button className=" font-semibold bg-primary-900 hover:bg-primary-800 border-2 border-[#956B73] text-white py-3 w-full px-6  transition-all ease-in-out">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        className={`max-w-[1280px] w-full m-auto flex flex-col flex-grow transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
