import Hero from "@/components/Hero";
import ProjectData from "@/data/Projects";
import Technologies from "@/pages/Technologies";
import About from "@/pages/About";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Technologies />
      <ProjectData />
      <About />

    </main>
  );
}
