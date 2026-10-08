import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
