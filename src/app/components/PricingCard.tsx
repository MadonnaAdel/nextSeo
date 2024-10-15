import React from "react";
import Mainbtn from "./mainBtn";

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: "Basic",
    price: "$9.00",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Enterprise ERP integrations",
      "Limited tools",
      "Local video issuance",
    ],
  },
  {
    title: "Basic",
    price: "$20.00",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Enterprise ERP integrations",
      "Limited tools",
      "Local video issuance",
    ],
  },
  {
    title: "Basic",
    price: "$35.00",
    features: [
      "Unlimited cards",
      "Automated management",
      "SOX compliance",
      "Enterprise ERP integrations",
      "Limited tools",
      "Local video issuance",
    ],
  },
];

const PricingCard: React.FC<PricingOption> = ({ title, price, features }) => (
  <div className="border rounded-lg p-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-4xl mt-4 text-gray-700">{price}</p>
    <ul className="mt-6 space-y-2" role="list">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="mt-3">
      <Mainbtn text="learn more" link="/" />
    </div>
  </div>
);

const PricingCards: React.FC = () => {
  return (
    <section className="mx-auto py-10 px-4 container">
      <h2 className="text-5xl mb-8">
        <span className="font-bold">SPECIAL OFFER!</span>
        <span className="font-thin">
          CHOOSE
          <br /> YOUR PACK TODAY
        </span>
      </h2>
      <div
        className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center"
        role="grid"
      >
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
