"use client";
import React, { useEffect, useState } from "react";
import Mainbtn from "../components/mainBtn";
import MinCardHeroSection from "./minCardHero";
import Image from "next/image";
import { Feature, getFeatures } from "../serviceLogic.tsx/heroSectionService";
import Loader from "../components/loader";

const HeroSection: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      const data = await getFeatures();
      setFeatures(data);
      setLoading(false);
    };

    fetchFeatures();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between p-8 bg-gradient-to-r from-gridiantOne to-gridiantTow h-screen">
        <div className="px-2">
          <h2 className="uppercase font-thin text-2xl">
            Digital Marketing Agency
          </h2>
          <h1 className="lg:text-8xl uppercase text-6xl">
            <span className="font-bold">We help to</span>
            <span className="font-thin"> grow your startup</span>
          </h1>
        </div>
        <aside className="hidden lg:flex w-2/3 align-middle flex-col p-2">
          <div className="w-1/3">
            <Image
              src="/assets/group-images.png.png"
              alt="Customer images"
              className="h-auto rounded-full shadow-lg"
              width={80}
              height={80}
            />
          </div>
          <div>
            <p className="mt-4 text-lg text-gray-700">
              We have 18k+ customers world-wide
            </p>
            <p className="mt-2 text-md text-gray-500 mb-4">
              We believe that the surest measure of success is when a client
              partners with us; more than half our clients stay with us for
              longer than a single project.
            </p>
            <Mainbtn text="Get Started" link="/" isLoading={loading} />
          </div>
        </aside>
      </div>
      <div className="bg-primary h-auto">
        <div className="w-2/3 relative bottom-20 hidden md:block">
          <Image
            src="/assets/Group 5.png"
            alt="Hero section image"
            className="mx-auto"
            width={800}
            height={800}
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {features.map((feature, index) => (
              <MinCardHeroSection
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
