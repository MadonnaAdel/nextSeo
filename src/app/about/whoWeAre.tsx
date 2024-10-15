import Image from "next/image";
import SectionTitle from "../components/sectionTitle";
import Analistec from "./analistec";
import React from "react";
interface MinCardProps {
  number: string;
  status: string;
  Rate: string;
  image: string;
  alt: string;
}
const MinCard: React.FC<MinCardProps> = ({
  number,
  status,
  Rate,
  image,
  alt,
}) => {
  return (
    <>
      <div className="flex">
        <div className="m-2">
          <Image src={image} alt={alt} width={30} height={30} />
        </div>

        <div className="flex-col">
          <div className="text-3xl font-bold mr-2">{number}</div>
          <div>
            <p>{status}</p>
            <p>{Rate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="px-4 py-12 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="flex flex-col justify-center">
            <SectionTitle text="02. Who we are" underlineWidth="1/4" />
            <h1 className="text-4xl font-bold mb-4">
              WE MAKE STORABLE STRATEGY <br />
              <span className="text-gray-700">
                GROWTH YOUR COMPANY WITH NME AGENCY!
              </span>
            </h1>
            <p className="text-gray-600 mb-6">
              We deploy world-class creative design, team on demand. That can
              design surest measures of success is when a client partner with
              more than once build, ship scale your vision most efficient.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <MinCard
                status="Award for Happy"
                number="12k+"
                Rate="customers"
                image="/assets/rating 1.png"
                alt="Rating image"
              />
              <MinCard
                status="Projects Success"
                number="50k+"
                Rate="Rate 50+"
                image="/assets/success 1.png"
                alt="Success image"
              />
            </div>
          </article>

          <div className="relative hidden lg:block">
            <Image
              src="/assets/aboutT 1.png"
              alt="Team Image"
              className="w-full h-full object-cover"
              width={1200}
              height={1000}
            />
            <div className="absolute translate-x-80 -translate-y-40">
              <Analistec
                title="Projects Success Rate"
                background="bg-gradient-to-r from-gridiantOne to-gridiantTow"
                numberAnalises="10M+"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
