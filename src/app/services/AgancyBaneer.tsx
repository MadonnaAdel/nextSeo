import Image from "next/image";
import React from "react";
import Mainbtn from "../components/mainBtn";

const AgencyBanner: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-primary h-screen my-14">
      <div className="w-full lg:w-1/2 h-full hidden lg:block">
        <Image
          src="/assets/Women Collaborating at Work 1.png"
          alt="Team working"
          width={1300}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className=" text-white lg:w-1/2 h-full flex items-center justify-start md:w-full"
        style={{
          backgroundImage: 'url("/assets/Background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8">
          <h2 className="text-12 lg:text-4xl font-bold mb-4 uppercase">
            We’re SIMPLE
            <span className="font-thin">
              BUT <br /> PRO-LEVEL AGENCY
            </span>
          </h2>
          <p className="text-gray-300 mb-6 mt-20 w-3/4">
            Theme Builder, you have complete control over the static elements of
            your website.
          </p>
          <div className="mx-auto">
            <Mainbtn text="About us" link="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
