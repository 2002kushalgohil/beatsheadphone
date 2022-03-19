import Layout from "../components/Layout";
import Hero from "../components/Pages/Hero";
import Feature from "../components/Pages/Feature";
import Immerse from "../components/Pages/Immerse";
import BgImage from "../components/Pages/BgImage";
import Controll from "../components/Pages/Controll";
import ExtraFeatures from "../components/Pages/ExtraFeatures";
import WhatInBox from "../components/Pages/WhatInBox";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Feature />
      <Immerse />
      <BgImage />
      <Controll />
      <ExtraFeatures />
      <WhatInBox />
    </Layout>
  );
}
