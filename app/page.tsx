import ProjectConatiner from "@/components/ProjectContainer";
import SkillContainer from "@/components/SkillContainer";

export default function Home() {
  return (
    <main className=" w-10/12 mx-auto">
      <section className="flex flex-col items-center ">
        <h3 className=" text-2xl font-bold">My Skills</h3>
        <SkillContainer />
      </section>
      <section className=" flex flex-col items-center">
        <h3 className=" text-2xl font-bold">My Projects</h3>
        <ProjectConatiner />
      </section>
    </main>
  );
}
