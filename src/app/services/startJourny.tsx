import React from "react";
import Mainbtn from "../components/mainBtn";

const StartJourny: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div
        className="flex items-center justify-center text-white py-10 px-5 md:px-20 rounded-lg my-5"
        style={{
          backgroundImage: 'url("/assets/Frame 155 (1).png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center bg-opacity-70 p-5 rounded-lg">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            START YOUR EXPERIENCE
          </h2>
          <p className="text-sm md:text-lg mb-5">WITH NU MEDIA EDGE</p>
          <Mainbtn text="Let's Talk" link="/" />
        </div>
      </div>
    </section>
  );
};

export default StartJourny;
