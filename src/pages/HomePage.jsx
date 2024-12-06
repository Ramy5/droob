import { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import OurTrainingPrograms from "../components/OurTrainingPrograms.jsx";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import CTA from "../components/CTA.jsx";
import { Credits } from "../components/Credits.jsx";
import FAQs from "../components/FAQs.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";
import Courses from "../components/Courses.jsx";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <OurTrainingPrograms />
      <About />
      <Courses />
      <Features />
      <CTA />
      <Credits />
      <FAQs />
      <Pricing />
      <Testimonials />
    </Fragment>
  );
};

export default HomePage;
