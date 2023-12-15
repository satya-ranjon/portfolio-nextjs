import HeroSection from "@/components/HeroSection";
import DesignEngineering from "@/components/DesignEngineering";
import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import MySelf from "@/components/MySelf";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <div id="heroSection">
          <HeroSection />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div id="design">
          <DesignEngineering />
        </div>
      </SectionContainer>
      <SectionContainer color="bg-colorTwo">
        <div id="myself">
          <MySelf />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div id="project">
          <Projects />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div id="contact">
          <Contact />
        </div>
      </SectionContainer>
      <Footer />
    </>
  );
}
