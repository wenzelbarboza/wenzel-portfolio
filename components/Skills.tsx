import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiDrizzle, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section className="flex flex-col gap-2 border-b-[1px] border-black border-solid  p-3">
      <h1 className="font-semibold text-xl">Skills</h1>
      <div className="flex gap-1 items-center">
        <FaHtml5 className="text-3xl hover:text-gray-600" />
        <FaCss3Alt className="text-3xl hover:text-gray-600" />
        <FaJsSquare className="text-3xl hover:text-gray-600" />
        {/* <SiTypescript className="text-3xl hover:text-gray-600" /> */}
        <BiLogoTypescript className="text-4xl hover:text-gray-600" />
        <FaReact className="text-3xl hover:text-gray-600" />
        <FaNodeJs className="text-3xl hover:text-gray-600" />
        <SiExpress className="text-3xl hover:text-gray-600" />
        <BsFiletypeSql className="text-2xl hover:text-gray-600" />
        <SiDrizzle className="text-3xl hover:text-gray-600" />
      </div>
    </section>
  );
};

export default Skills;
