import { projectList } from "@/utils/projectList";
import { ProjectCard } from "./ProjectCard";

const ProjectConatiner = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-12 gap-x-2 w-full m-auto bg-blue-700">
      {projectList.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectConatiner;
