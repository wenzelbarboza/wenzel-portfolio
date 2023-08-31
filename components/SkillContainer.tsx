"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import htmlImage from "@/asset/html-5.png";
import Image from "next/image";

const SkillContainer = () => {
  return (
    <ScrollArea>
      <Image width={100} height={100} src={htmlImage} alt="" />
      aaa
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default SkillContainer;
