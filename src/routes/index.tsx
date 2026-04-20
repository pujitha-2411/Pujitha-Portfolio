import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Volunteering } from "@/components/sections/Volunteering";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pujitha Kolakonda — AI / ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Pujitha Kolakonda, a final-year AI/ML engineer building production LLM, RAG and computer vision systems.",
      },
      { property: "og:title", content: "Pujitha Kolakonda — AI / ML Engineer" },
      {
        property: "og:description",
        content:
          "Final-year AI/ML engineer shipping LLM, NLP and computer vision systems. Three internships, four models, one obsession.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
