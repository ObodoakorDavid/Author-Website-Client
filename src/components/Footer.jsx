import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#956B73] text-white rounded-tl-3xl px-4 py-12 flex flex-col gap-8 md:items-start md:flex-row md:gap-8">
      <p className="text-3xl font-semibold w-3/3 text-start">
        TITILOPE OYEWOLE
      </p>

      <ul className=" flex flex-col gap-1">
        <li>About</li>
        <li>Contact</li>
        <li>Books for sale</li>
      </ul>

      <ul className=" flex flex-col gap-1">
        <li>Social Media</li>
        <li>Icons</li>
        <li>@placeholder</li>
      </ul>
    </div>
  );
}
