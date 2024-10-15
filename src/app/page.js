import Welcome from "@/components/Welcome/Welcome";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <div className="homepage">
      <Welcome />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}
