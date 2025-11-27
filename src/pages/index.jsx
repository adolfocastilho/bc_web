import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import RecognitionSection from "@components/sections/Recognition";
import PortfolioSection from "@components/sections/Portfolio";
import ContactSection from "@/src/components/sections/Contact";

const Home1 = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/adolfo.webp"}
    >
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <RecognitionSection />
      <PortfolioSection />
      <ContactSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}