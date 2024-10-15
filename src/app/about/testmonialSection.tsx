"use client";

import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "Mike David",
  },
  {
    quote: "Alts has been instrumental in our success!",
    author: "Jane Doe",
  },
  {
    quote: "The best team we could ask for!",
    author: "John Smith",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section className="px-4 py-12 lg:px-20 bg-white">
      <div className="container mx-auto flex items-center justify-center">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="text-gray-500 hover:text-black p-2 h-12 flex items-center"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="text-center max-w-5xl mx-6 flex-grow min-h-52">
          <div className="text-6xl text-black mb-4 text-center font-bold">
            <FaQuoteLeft className="bg-secondary p-3 rounded-full mx-auto" />
          </div>
          <blockquote
            className={`text-lg text-gray-700 italic mb-4 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-90"
            }`}
          >
            {testimonials[currentTestimonial].quote}
          </blockquote>
          <cite
            className={`font-semibold text-gray-900 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-90"
            }`}
          >
            {testimonials[currentTestimonial].author}
          </cite>
        </div>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="text-gray-500 hover:text-black p-2 h-12 flex items-center"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
