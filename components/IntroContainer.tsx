import Image from "next/image";
import React from "react";

import alien from "@/asset/alien-dance.gif";
import ufo_1 from "@/asset/anime-ovni.gif";
import ufo_2 from "@/asset/ufo-unidentified-flying-object.gif";
import space from "@/asset/space.jpeg";
import star from "@/asset/star.png";

const IntroContainer = () => {
  return (
    <div className="h-[35rem] w-full bg-cyan-500 relative">
      {/* <Image src={alien} width={300} height={300} alt="alien" />
      <Image src={ufo_1} width={300} height={300} alt="alien" /> */}
      <Image
        src={ufo_2}
        width={300}
        height={300}
        alt="alien"
        className=" absolute left-52 top-10"
      />
      <Image
        src={star}
        width={100}
        height={100}
        alt="alien"
        className=" absolute top-10 left-4"
      />
      <Image
        src={star}
        width={100}
        height={100}
        alt="alien"
        className=" absolute top-80 left-32"
      />
      <Image
        src={star}
        width={150}
        height={150}
        alt="alien"
        className=" absolute top-80 right-32"
      />
      <Image
        src={star}
        width={50}
        height={50}
        alt="alien"
        className=" absolute bottom-7 left-32"
      />
      <Image
        src={star}
        width={75}
        height={75}
        alt="alien"
        className=" absolute top-32 right-32"
      />
    </div>
  );
};

export default IntroContainer;
