import Image from "next/image";
import React from "react";
import trucks from "@/../public/media/MANYTRUCKS.jpg";
import ContactForm from "@/components/global/contactForm";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const ContactPage = () => {
  return (
    <>
      <section className="relative w-full h-[30em]">
        <Image src={trucks} fill alt="" className="object-cover -z-10" />
        <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-t from-[#000000]/90 from-40% -z-5" />
        <div className="absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center flex-col pt-14 gap-4 text-white z-[10000]">
          <h4 className="text-2xl  max-[480px]:text-[22px] max-[480px]:leading-[1.2] font-semibold">
            Contact Us
          </h4>
          <p className="max-w-[700px] min-[640px]:text-xl text-center">
            We value your feedback and inquiries. Whether you have a question
            about our services, need support, or want to learn more about our
            company, our team is here to assist you.
          </p>
        </div>
      </section>
      <section className=" py-20 lg:px-20 px-5  max-[200px]:px-[0.3125rem] flex flex-col gap-14 ">
        <div className="flex flex-col items-center gap-3">
          <h4 className="text-[#0b326f]">Request a quote</h4>
          <h2 className="w-full max-w-[20em] text-center text-2xl max-[480px]:text-[22px] max-[480px]:leading-[1.2] font-semibold">
            Fill out the form below, and we will get back to you as soon as
            possible
          </h2>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-20">
          <div className="w-full max-w-[680px]">
            <ContactForm />
          </div>
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-medium text-xl">Head Office</h4>
              <ul>
                <li>Address: Vingunguti, Dar es salaam, Tanzania</li>
                <li>Phone: +255 743 711 711</li>
                <li>Email: relaxpetroleumcompany@gmail.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-medium text-xl">Operating Hours</h4>
              <ul>
                <li>Monday to Friday: 9:00 AM - 7:00 PM</li>
                <li>Saturday: 10:00AM - 7:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-10 pb-20 lg:px-20 px-5  max-[200px]:px-[0.3125rem] flex flex-col gap-14 items-center ">
        <div className="space-y-3 text-center">
          <h4 className="text-[#0b326f]">Visit Us</h4>
          <h2 className="max-w-[25em] text-2xl max-[480px]:text-[22px] max-[480px]:leading-[1.2] font-semibold">
            You are welcome to visit our head office in Vingunguti, Dar es
            Salaam. Please contact us to schedule an appointment.
          </h2>
        </div>
        <div className="flex gap-10 w-full  google-maps bg-slate-400 rounded-2xl">
          <GoogleMapsEmbed
            apiKey={"AIzaSyAYqgifiJetWOWArf4oLa7LkpG0U9tGWaw"}
            height="400px"
            width="500px"
            mode="place"
            q="-6.848309,39.229624"
            center="-6.848309,39.229624"
            zoom="15"
          />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
