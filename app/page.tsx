import SkillContainer from "@/components/SkillContainer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center ">
        <h1>My Skills</h1>
        <div>
          <SkillContainer />
        </div>
      </div>
    </main>
  );
}
