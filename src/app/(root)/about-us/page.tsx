import ImageContainer from "@/components/global/Image-container";
import InlineLayoutWithIcon from "@/components/global/inline-layout-withIcon";
import StatsComponent from "@/components/global/stats-component";
import passionIcon from "@/../public/media/icon-purpose.svg";
import missionIcon from "@/../public/media/icon-mission.svg";
import React from "react";
import { coreValue } from "@/lib/constants";

const AboutUs = () => {
  return (
    <>
      <section className="flex max-w-[1700px]  m-auto lg:items-center lg:flex-row flex-col  border-b py-20 lg:px-20 px-5 max-[200px]:px-[0.3125rem] gap-8">
        <div className="min-[590px]:max-w-[500px] w-full flex flex-col gap-4">
          <h4 className="text-[#0B326F]">Who we are </h4>
          <h1 className="text-[40px] font-semibold max-[465px]:text-[32px] max-[350px]:text-[24px] max-[247px]:text-[22px] leading-[1.25em]">
            Pioneering innovative petroleum logistics in Tanzania
          </h1>
        </div>

        <div className="flex lg:gap-10 gap-2 items-center h-max w-full  flex-1">
          <ImageContainer imagePos="object-[0%_100%]" styles="max-lg:hidden" />
          <ImageContainer imagePos="object-[100%_100%]" />
        </div>
      </section>
      <section className="lg:px-20 max-w-[1700px]  m-auto px-5 max-[200px]:px-[0.3125rem] pt-20 flex flex-col gap-7">
        <h2 className="text-[#0B326F] font-semibold text-2xl">Our story</h2>
        <p>
          Founded in 2014 and headquartered in Vingunguti, Dar es Salaam, Relax
          Petroleum is dedicated to providing cutting-edge solutions in
          logistics and customs clearing for petroleum products. As a leading
          transporter of petroleum in Tanzania, we deliver cost-effective
          solutions across Central and Eastern Africa, ensuring a reliable and
          professional service. Recognizing the need for dependable fuel
          transportation, we have built a reputation for excellence. Our core
          focus is to offer top-tier transportation services to high-profile
          clients, with safety as our utmost priority. We pride ourselves on our
          commitment to efficiency, reliability, clean deliveries, timely
          reporting, and loss-free service. Relax Petroleum boasts
          state-of-the-art facilities, robust assets, and skilled personnel,
          enabling us to deliver flexible and reliable transportation solutions.
          Our core value lies in developing a sustainable business through
          strategic partnerships across Central, Southern, and Eastern African
          markets. Join us in revolutionizing the petroleum logistics industry
          with unparalleled service and dedication.
        </p>
      </section>
      <StatsComponent />
      <section className="py-20 max-w-[1700px]  m-auto">
        <div className="flex flex-col lg:justify-center justify-between items-center">
          <div className="max-[1140px]:hidden">
            <h2 className="text-2xl  max-[480px]:text-[22px] max-[480px]:leading-[1.2] text-[#0B326F] font-medium border-b border-[#ececec] ">
              Relax
            </h2>
          </div>

          <div className="flex lg:justify-center min-[640px]:flex-row flex-col justify-between max-[640px]:items-center lg:gap-20 gap-10 relative lg:px-20 px-5 max-[200px]:px-[0.3125rem]">
            <InlineLayoutWithIcon
              icon={passionIcon}
              head="Our Purpose"
              description="We are committed to delivering integrated, environmentally conscious fuel distribution and logistics solutions. Our goal is to help our customers safely and affordably unlock energy sources across Africa."
              padding="min-[1140px]:pt-[130px]"
            />
            <div>
              <svg
                width="635"
                height="169"
                viewBox="0 0 635 169"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 -translate-x-1/2 max-[1140px]:hidden"
              >
                <path
                  d="M315.5 0V168M315.5 168H0M315.5 168H623.218M315.5 168H635"
                  stroke="#ececec"
                  strokeWidth="1px"
                />
              </svg>
            </div>
            <InlineLayoutWithIcon
              icon={missionIcon}
              head="Our Mission"
              description="Responsibly grow and continuously enhance our business to maximize shareholder value. We prioritizing the well-being of our people, serving our customers with excellence, supporting our communities, and protecting the environment."
              padding="min-[1140px]:pt-[130px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col max-w-[1700px]  m-auto max-[640px]:items-center items-start  py-20 lg:px-20 px-5 max-[200px]:px-[0.3125rem] gap-10">
        <div className="flex flex-col max-[640px]:items-center items-start gap-3">
          <h4 className="text-[#0B326F] max-[640px]:text-center text-left">
            Our Strategic Pillars
          </h4>
          <h2 className="font-semibold text-2xl  max-[480px]:text-[22px] max-[480px]:leading-[1.2] min-[640px]:w-[500px] w-full max-[640px]:text-center">
            A solid foundation for long-term sustainability.
          </h2>
        </div>
        <div className="flex flex-col min-[640px]:flex-row justify-between w-full">
          {coreValue.map((core, index) => (
            <InlineLayoutWithIcon
              key={index}
              icon={core.img}
              head={core.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
