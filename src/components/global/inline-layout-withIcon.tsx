import Image, { StaticImageData } from "next/image";
import React from "react";
type Props = {
  icon: StaticImageData;
  head: string;
  description?: string;
  padding?: string;
};
const InlineLayoutWithIcon = ({ icon, head, description, padding }: Props) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-center  gap-6 " +
        padding
      }
    >
      <div className="relative h-20 w-20">
        <Image
          src={icon}
          fill
          sizes="(min-width: 768px) 80vw"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-medium text-xl">{head}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InlineLayoutWithIcon;
