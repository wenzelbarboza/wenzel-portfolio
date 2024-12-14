import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Socials />
      <Skills />
      <Projects />
    </>
  );
}
