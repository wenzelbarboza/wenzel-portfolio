"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import htmlImage from "@/asset/html-5.png";
import Image from "next/image";
import { skillList } from "@/utils/skilList";
import SkillCard from "./SkillCard";

const SkillContainer = () => {
  return (
    // <ScrollArea>
    //   <div className=" flex p-9 items-center">
    //     {skillList.map((item, index) => (
    //       <SkillCard key={index} img={item.img} />
    //     ))}
    //   </div>
    //   <ScrollBar orientation="horizontal" />
    // </ScrollArea>
    <div className=" scroll-smooth flex overflow-x-scroll p-10">
      {skillList.map((item, index) => (
        <SkillCard key={index} img={item.img} />
      ))}
    </div>
  );
};

export default SkillContainer;
