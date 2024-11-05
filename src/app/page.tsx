import OurWork from "@/components/OurWork/page";
import WhatWeDo from "@/components/WhatWeDo/page";
import Hero from "@/components/Hero/page";
import TextSection from "@/components/TextSection/page";
import Mousetrail from "@/components/Mousetrail/page";
import TechnologieWeUse from "@/components/TechnologieWeUse/page";

export default function Home() {
  return (
    <>
      <Hero />
      <OurWork />
      <TextSection />
      <TechnologieWeUse />
      <Mousetrail />
      <WhatWeDo />
    </>
  );
}
