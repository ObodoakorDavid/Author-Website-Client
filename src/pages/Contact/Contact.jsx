import React from "react";

export default function Contact() {
  return (
    <div className="py-6 flex flex-col gap-12">
      <div className="flex flex-col gap-4 md:flex-row py-6">
        <div className=" flex flex-col gap-6 md:w-1/2">
          <p className=" text-3xl font-semibold">Get In Touch</p>
          <p className=" font-semibold w-full">
            You can send me a message or ask me a question using this form.
          </p>
          <a className=" font-semibold" href="mailto:Grace@gtdipe.com">
            Email: Grace@gtdipe.com
          </a>
        </div>

        <form action="" className="flex flex-col gap-4 md:w-1/2">
          <input
            className="p-2 bg-transparent border-2 outline-0 caret-slate-400 text-slate-600"
            type="text"
            placeholder="Name"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-2 bg-transparent border-2 outline-0 caret-slate-400 text-slate-600"
          ></textarea>
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 outline-0 caret-slate-400 text-slate-600"
          />
          <button className=" font-semibold bg-[#956B73] border-2 border-[#956B73] text-white py-3 w-full px-6 hover:bg-white hover:text-[#956B73] transition-all ease-in-out">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
