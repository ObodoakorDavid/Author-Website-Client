import React from "react";
import image from "../../assets/images/G.T DÍPÈ (2).png";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className=" flex flex-col gap-8 items-start md:items-center md:flex-row w-full py-20 px-4">
      <div className="md:w-2/3 flex flex-col gap-4">
        <h2 className=" text-3xl font-semibold">About</h2>
        <p className=" font-semibold">TITILOPE OYEWOLE</p>
        <p>
          I began writing as a way to shed light on social issues and explore
          how the law can sometimes negatively impact lives. While my characters
          are fictional, they are deeply rooted in the real experiences of many
          individuals. As an advocate, I aim to use storytelling not only to
          entertain, but to provoke thought and inspire change. Through my work,
          I hope to contribute to a world that is safer, more just, and more
          inclusive for minorities.
        </p>

        <Link
          to="/about"
          className=" font-semibold bg-[#956B73] border-2 border-[#956B73] text-white rounded-lg py-3 w-fit px-6 hover:bg-white hover:text-[#956B73] transition-all ease-in-out"
        >
          MORE ABOUT G.T
        </Link>
      </div>
      <div className="md:w-1/3">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
}
