import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="flex-col flex-1 max-md:w-full h-64 border border-[rgba(236,236,236,0.58)]  min-[480px]:p-10 p-5 gap-8 shadow-[0_4px_20px_0_rgba(236,236,236,0.58)]  rounded-lg">
      {children}
    </div>
  );
};

export default Card;
