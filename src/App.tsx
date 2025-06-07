import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveRates from "./components/LiveRates";
import Benefits from "./components/Benefits";
import QuoteCalculator from "./components/QuoteCalculator";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import Gallery from "./components/Gallery";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./styles/animations.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <LiveRates />
        <Benefits />

        <section id="quote">
          <QuoteCalculator />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        {/* <section id="gallery">
          <Gallery />
        </section> */}

        <section id="about">
          <About />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
