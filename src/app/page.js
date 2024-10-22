import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Stack from '@/components/Stack/Stack';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}
