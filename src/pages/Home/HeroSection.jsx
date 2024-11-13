import React from "react";
import heroImage from "../../assets/images/G.T DÍPÈ (2).png";

export default function HeroSection() {
  return (
    <div>
      <img
        src={heroImage}
        alt="girl-reading"
        className=" w-full aspect-ratio-[16/9] max-h-[600px]"
      />
    </div>
  );
}
