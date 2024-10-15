import React from "react";
import Mainbtn from "../components/mainBtn";
import Image from "next/image";
import SectionTitle from "../components/sectionTitle";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        width={700}
        height={700}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </article>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl:
        "/assets/beautiful-young-woman-home-office-working-from-home-teleworking-concept.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/close-up-male-hands-using-laptop-home-1.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/close-up-male-hands-using-laptop-home.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/papers-laptop-office-table.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col">
            <SectionTitle text="feature" underlineWidth="1/3" />
            <h2 className="text-7xl uppercase font-thin">Projects</h2>
          </div>
          <div>
            <Mainbtn text="View More Projects" link="/" />
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
