import React from "react";

type Props = {
  experience: string;
  description: string;
};

const StatsCard = ({ experience, description }: Props) => {
  return (
    <div className="flex flex-col w-full justify-between max-md:items-center gap-4">
      <h4 className="text-textiary lg:text-[56px] text-[44px] max-md:text-[36px] font-semibold ">
        {experience}
        <span>+</span>
      </h4>
      <p className="lg:text-2xl text-xl text-[#191919] max-w-[300px] max-md:text-center w-full">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
