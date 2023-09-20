import Image from "next/image";
import React from "react";

type projectListType = {
  img: any;
  title: string;
  link?: string;
};

export const ProjectCard = ({ img, title, link }: projectListType) => {
  return (
    <div className=" h-72 bg-slate-500 flex flex-col box-border">
      <div className=" flex-[10] bg-lime-400 flex items-center justify-center relative">
        <Image fill={true} src={img} alt="image" />
      </div>
      <div className="w-full h-20 flex-[2] bg-fuchsia-700 flex justify-center items-center">
        <h5>{title}</h5>
      </div>
    </div>
  );
};
