import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Books from "../Books/Books";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <Books />
    </div>
  );
}
