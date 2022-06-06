import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import CardProject from "./CardProject/CardProject";
import { projects } from "../../constants/Constants";
import { GridContainer } from "./ProjetsStyles";

function Projets(props) {
  return (
    <Section noPadding id="projets">
      <SectionDivider />
      <SectionTitle main>Mes Projets</SectionTitle>
      <GridContainer>
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projets;
