"use client";
import HeroSection from "@/components/HeroSection";
import DesignEngineering from "@/components/DesignEngineering";
import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import { Element } from "react-scroll";
import MySelf from "@/components/MySelf";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Element name="heroSection" className="element">
          <HeroSection />
        </Element>
      </SectionContainer>
      <SectionContainer>
        <Element name="design" className="element">
          <DesignEngineering />
        </Element>
      </SectionContainer>
      <SectionContainer color="bg-colorTwo">
        <Element name="myself" className="element">
          <MySelf />
        </Element>
      </SectionContainer>
      <SectionContainer>
        <Element name="project" className="element">
          <Projects />
        </Element>
      </SectionContainer>
      <SectionContainer>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </SectionContainer>
      <Footer />
    </>
  );
}
