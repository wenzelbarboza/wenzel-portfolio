import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <section className="border-y-[1px] border-black border-solid  p-3 flex gap-1">
      <FaGithubSquare className="text-3xl hover:text-gray-600 cursor-pointer" />
      <FaLinkedin className="text-3xl hover:text-gray-600 cursor-pointer" />
    </section>
  );
};

export default Socials;
