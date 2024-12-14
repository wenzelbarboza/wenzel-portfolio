import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <div className="p-9 sm:p-0 sm:max-w-xl m-auto flex flex-col ">
        <Nav />
        <Hero />
        <Socials />
      </div>
    </>
  );
}
