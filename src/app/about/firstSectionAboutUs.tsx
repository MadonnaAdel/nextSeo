import React from "react";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import Analistec from "./analistec";
import { FaQuoteLeft } from "react-icons/fa";

const FirstAboutUs: React.FC = () => {
  return (
    <section className="px-4 py-12 lg:px-20 bg-white mx-auto">
      <div className="container mt-16 mx-auto">
        <div className="mb-12">
          <SectionTitle text="01. About Us" underlineWidth="1/3" />
          <h1 className="text-3xl md:text-5xl font-bold uppercase leading-snug">
            We are <FaQuoteLeft className="text-2xl mb-3 inline" /> MARKETEER
            <FaQuoteLeft className="text-2xl mb-3 inline-block" /> -<br />
            Marketing and Creative Agency Based in California
          </h1>
          <p className="mt-4 text-gray-600 text-base max-w-2xl">
            Unlocking creative horizons: the story behind “Arolax” a global
            digital agency crafting experiences, building dreams, and shaping
            success.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              loading="eager"
              src="/assets/box-A-1024x857.png"
              alt="Office Image"
              className="w-full h-full object-cover"
              width={1200}
              height={1000}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <article className="rounded-lg overflow-hidden">
              <Analistec
                title="We have 100+ satisfied clients"
                numberAnalises="100 k"
              />
            </article>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/box-B.png"
                alt="Team Member Image"
                className="w-full h-full object-cover"
                width={1024}
                height={857}
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/assets/box-A-1024x857.png"
                alt="Team Member Image"
                className="w-full h-full object-cover"
                width={1024}
                height={857}
              />
            </div>
            <article className="rounded-lg overflow-hidden">
              <Analistec
                title="We helped to get companies with $25M+ funding"
                numberAnalises="25M +"
                background="bg-gradient-to-r from-gridiantOne to-gridiantTow"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstAboutUs;
