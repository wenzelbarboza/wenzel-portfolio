import ProjectConatiner from "@/components/ProjectContainer";
import SkillContainer from "@/components/SkillContainer";

export default function Home() {
  return (
    <main className=" max-w-6xl mx-auto">
      <section className="flex flex-col items-center ">
        <h3 className=" text-2xl font-bold">My Skills</h3>
        <div>
          <SkillContainer />
        </div>
      </section>
      <section className=" flex flex-col items-center">
        <h3 className=" text-2xl font-bold">My Projects</h3>
        <div>
          <ProjectConatiner />
        </div>
      </section>
    </main>
  );
}
