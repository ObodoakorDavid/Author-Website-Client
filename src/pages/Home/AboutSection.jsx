import React from "react";
import image from "../../assets/images/set-designer-work-indoors.png";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className=" flex flex-col gap-8 items-start md:items-center md:flex-row w-full py-20 px-4">
      <div className="md:w-2/3 flex flex-col gap-4">
        <h2 className=" text-3xl font-semibold">About</h2>
        <p className=" font-semibold">TITILOPE OYEWOLE</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitationem
          repellat, doloremque provident expedita vel vero necessitatibus
          dignissimos ducimus, id autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitatione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitationem
          repellat, doloremque provident expedita vel vero necessitatibus
          dignissimos ducimus, id autem.
        </p>
        <Link
          to="/about"
          className=" font-semibold bg-[#956B73] border-2 border-[#956B73] text-white rounded-lg py-3 w-fit px-6 hover:bg-white hover:text-[#956B73] transition-all ease-in-out"
        >
          MORE ABOUT TITILOPE
        </Link>
      </div>
      <div className="md:w-1/3">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
}
