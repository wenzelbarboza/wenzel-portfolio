import Image from "next/image";
import React from "react";

type propType = { img: string };

const SkillCard = ({ img }: propType) => {
  return (
    <div className=" shadow-lg border-2 border-slate-50 rounded-md flex-shrink-0 mx-6">
      <Image className=" md:w-40 md:h-40 w-28 h-28 " src={img} alt="logo" />
    </div>
  );
};

export default SkillCard;
