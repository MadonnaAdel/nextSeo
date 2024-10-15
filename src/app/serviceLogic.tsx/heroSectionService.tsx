export interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Scale your business team quickly",
    description:
      "We provide the perfect solutions for quickly hiring specialized teams, allowing your company to expand rapidly and meet market demands.",
    icon: "/assets/Container-1.png",
  },
  {
    title: "Improve yearly product sale ratio",
    description:
      "With our optimized marketing strategies, you can significantly boost sales rates and increase profits throughout the year.",
    icon: "/assets/Container-2.png",
  },
  {
    title: "Grow-up your real traffic",
    description:
      "We help you attract more visitors who are genuinely interested in your services, increasing the chances of converting them into loyal customers.",
    icon: "/assets/Container.png",
  },
];

export const getFeatures = async (): Promise<Feature[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(features);
    }, 2000);
  });
};
