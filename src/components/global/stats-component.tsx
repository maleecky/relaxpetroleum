import { stats } from "@/lib/constants";
import StatsCard from "./stats";

const StatsComponent = () => {
  return (
    <section className="flex w-full md:flex-row gap-5 flex-col items-center justify-between lg:px-20 px-5 max-md:px-[0.3125rem] py-10 ">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          experience={stat.experience}
          description={stat.description}
        />
      ))}
    </section>
  );
};

export default StatsComponent;
