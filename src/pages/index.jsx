import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne"
import CountersSection from "@components/sections/Counters";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import RecognitionSection from "@components/sections/Recognition";
import SkillsOneSection from "@components/sections/SkillsOne";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import LatestPostsSection from "@components/sections/LatestPosts";
import CallToActionSection from "@components/sections/CallToAction";

const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });

const Home1 = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/2.png"}
    >
      <HeroOneSection />
      <AboutSection />
      {/* <CountersSection /> */}
      <ServicesSection />
      <RecognitionSection />
      <SkillsOneSection />
      <SkillsTwoSection />
      <TestimonialSlider />
      <LatestPostsSection posts={props.posts} />
      <CallToActionSection />
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