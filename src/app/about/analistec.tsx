import React from "react";

interface AnalistecProps {
  title: string;
  numberAnalises: string;
  background?: string;
}

const Analistec: React.FC<AnalistecProps> = ({
  title,
  numberAnalises,
  background = "bg-gray-100",
}) => {
  return (
    <section className={`${background} p-6 rounded-lg`}>
      <header>
        <h2 className="text-gray-600 text-sm m-0 w-3/4">{title}</h2>
      </header>
      <div>
        <p className="text-5xl mt-10 text-center">{numberAnalises}</p>
      </div>
    </section>
  );
};

export default Analistec;
