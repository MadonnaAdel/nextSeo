import Image from "next/image";
import React from "react";

interface MinCardHeroSectionProps {
  title: string;
  description: string;
  icon: string;
}

const MinCardHeroSection: React.FC<MinCardHeroSectionProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article className="text-white p-6 rounded-lg flex flex-col items-center m-2 shadow-sm shadow-secondary hover:shadow-xl transition-shadow duration-300">
      <div className="bg-secondary p-4 rounded-full mb-4 w-16">
        <Image src={icon} alt="Feature Image" width={40} height={40} />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </article>
  );
};

export default MinCardHeroSection;
