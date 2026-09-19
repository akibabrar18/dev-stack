import React, { use } from "react";
import type TechnologieType from "../Types/TechnologieType";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologyProps {
  technologiesPromise: Promise<TechnologieType[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="container mx-auto px-4 xl:px-0">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#E91E63] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#475569] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} technology={tech} />
          ))}
        </div>

        <div className="lg:col-span-1 order-last flex justify-center lg:justify-start">
          <SelectedTechnologies />
        </div>
      </div>
    </div>
  );
};

export default Technology;
