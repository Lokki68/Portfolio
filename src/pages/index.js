import { Layout } from "../Layout/Layout";
import { Section } from "../styles/GlobalComponents";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projets from "../components/Projets/Projets";
import Technologies from "../components/Technologies/Technologies";
import TimeLine from "../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projets />
      <Technologies />
      <TimeLine />
    </Layout>
  );
};

export default Home;
