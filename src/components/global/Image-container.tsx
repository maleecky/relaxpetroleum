import Image from "next/image";
import React from "react";
import trucks from "@/../public/media/MANYTRUCKS.jpg";

type Props = {
  imagePos?: string;
  styles?: string;
};

const ImageContainer = ({ imagePos, styles }: Props) => {
  return (
    <div
      className={`min-h-[400px] relative w-full bg-transparent ${
        styles ? styles : ""
      } `}
    >
      <Image
        src={trucks}
        fill
        sizes="(min-width:768px) 100vw"
        alt=""
        className={"object-cover " + imagePos}
      />
    </div>
  );
};

export default ImageContainer;
