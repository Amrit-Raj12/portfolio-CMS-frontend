import React from "react";
import HomeLayout from "./HomeLayout/HomeLayout";
import TemplateSection from "./TemplateSection/TemplateSection";
import GetStarted from "./GetStarted/GetStarted";
import Contact from "./Contact/Contact";
import Explore from "./Explore/Explore";
import BluredBackground from "./BluredBackground";

const Landing = () => {
  return (
    <HomeLayout>
      {/* Template Section */}
      <TemplateSection />
      {/* Started Section */}
      <GetStarted />

      {/* Explore */}
      <Explore />
      {/* Contact Section
      <Contact /> */}
    </HomeLayout>
  );
};

export default Landing;
