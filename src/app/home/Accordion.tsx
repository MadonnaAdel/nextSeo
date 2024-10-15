"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left py-4 px-4 font-medium text-lg bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
            id={`accordion-button-${index}`}
          >
            <span>{item.question}</span>
            <span className="text-xl flex items-center justify-center bg-secondary p-2 rounded-full font-thin">
              {activeIndex === index ? (
                <FaArrowUp className="transform transition-transform duration-700" />
              ) : (
                <FaArrowDown className="transform transition-transform duration-300" />
              )}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"}`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            id={`accordion-content-${index}`}
          >
            <div className="p-4 text-gray-700 bg-gray-50">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
