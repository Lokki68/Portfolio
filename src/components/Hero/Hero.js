import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { useRouter } from "next/router";
import Button from "../../styles/GlobalComponents/Button";

function Hero(props) {
  const router = useRouter();

  return (
    <Section noPadding>
      <LeftSection>
        <SectionTitle main>
          Bienvenue sur <br />
          Mon PortFolio
        </SectionTitle>
        <SectionText>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Je m'appelle Brice, je suis développeur FullStack. En reconversion
          professionnelle.
        </SectionText>
        <Button onClick={() => router.push("mailto:bricel67@gmail.com")}>
          En savoir plus
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
