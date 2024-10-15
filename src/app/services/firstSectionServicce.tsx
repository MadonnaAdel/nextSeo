import Image from "next/image";
import React from "react";
import SectionTitle from "../components/sectionTitle";

const FirstSectionServices = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row items-start gap-8 p-6 lg:p-12 mx-auto">
        <header className="lg:w-1/2 mt-32">
          <SectionTitle text="Services" underlineWidth="1/3" />
          <h2 className="text-gray-800 text-3xl lg:text-4xl font-bold mb-4">
            WE MAKE <span className="text-black">DESIGN</span>
            <span className="font-thin"> THAT LEAD AND INSPIRE.</span>
          </h2>
          <p className="text-gray-600 my-6">
            We take a similar approach to design commercial to impactfully
            approach over the flowchart of user-friendly wireframe.
          </p>
          <Image
            src="/assets/curved-arrow-with-broken-line 1.png"
            alt="arrow"
            width={80}
            height={80}
          />
        </header>

        <div className="lg:w-1/2 mt-32">
          <Image
            src="/assets/Group 37.png"
            alt="Design team working"
            width={80}
            height={80}
            quality={100}
            className="rounded-lg shadow-lg w-full h-auto object-cover hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSectionServices;
