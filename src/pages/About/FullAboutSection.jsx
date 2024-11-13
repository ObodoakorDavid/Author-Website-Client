import React from "react";
import image from "../../assets/images/G.T DÍPÈ (2).png";

export default function FullAboutSection() {
  return (
    <div className=" flex flex-col gap-8 items-center text-center md:text-left md:items-center md:flex-row w-full py-20 px-4">
      <div className="md:w-2/3 flex flex-col gap-4">
        <h2 className=" text-3xl font-semibold">About</h2>
        <p className=" font-semibold">G.T.DÍPÈ</p>

        <p>
          I began writing as a way to shed light on social issues and explore
          how the law can sometimes negatively impact lives. While my characters
          are fictional, they are deeply rooted in the real experiences of many
          individuals. As an advocate, I aim to use storytelling not only to
          entertain, but to provoke thought and inspire change. Through my work,
          I hope to contribute to a world that is safer, more just, and more
          inclusive for minorities.
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitatione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitationem
          repellat, doloremque provident expedita vel vero necessitatibus
          dignissimos ducimus, id autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitationem
          repellat, doloremque provident expedita vel vero necessitatibus
          dignissimos ducimus, id autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi
          tempora rem dicta quia non culpa, molestias aspernatur exercitationem
          repellat, doloremque provident expedita vel vero necessitatibus
          dignissimos ducimus, id autem.
        </p> */}
      </div>
      <div className="md:w-1/3">
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
}
