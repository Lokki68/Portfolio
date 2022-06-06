import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListCard,
  ListContainer,
  ListContent,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiAngularSimple,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiGithubBadge,
  DiUbuntu,
  DiPhp,
} from "react-icons/di";

function Technologies(props) {
  return (
    <Section id="technologies">
      <SectionDivider />
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Voici les technologies que j'utilise le plus souvent pour réaliser mes
        projets. Et surtout les technologies qui me tienne à cœur, et que je
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        continue d'apprendre, jour après jour.
      </SectionText>
      <List>
        {/*Front*/}
        <ListItem>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListContent>
              <ListCard>
                <DiHtml5 size="4rem" />
                <ListParagraph>Html</ListParagraph>
              </ListCard>
              <ListCard>
                <DiCss3 size="4rem" />
                <ListParagraph>Css</ListParagraph>
              </ListCard>
              <ListCard>
                <DiSass size="4rem" />
                <ListParagraph>Sass</ListParagraph>
              </ListCard>
              <ListCard>
                <DiJsBadge size="4rem" />
                <ListParagraph>JavaScript</ListParagraph>
              </ListCard>
              <ListCard>
                <DiReact size="4rem" />
                <ListParagraph>ReactJs</ListParagraph>
              </ListCard>
              <ListCard>
                <DiAngularSimple size="4rem" />
                <ListParagraph>Angular</ListParagraph>
              </ListCard>
            </ListContent>
          </ListContainer>
        </ListItem>

        {/*Back*/}
        <ListItem>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListContent>
              <ListCard>
                <DiMongodb size="4rem" />
                <ListParagraph>MongoDb</ListParagraph>
              </ListCard>
              <ListCard>
                <DiNodejsSmall size="4rem" />
                <ListParagraph>NodeJs</ListParagraph>
              </ListCard>
              <ListCard>
                <DiMysql size="4rem" />
                <ListParagraph>MySql</ListParagraph>
              </ListCard>
            </ListContent>
          </ListContainer>
        </ListItem>

        {/*Divers*/}
        <ListItem>
          <ListContainer>
            <ListTitle>Divers</ListTitle>
            <ListContent>
              <ListCard>
                <DiGithubBadge size="4rem" />
                <ListParagraph>GitHub</ListParagraph>
              </ListCard>
              <ListCard>
                <DiUbuntu size="4rem" />
                <ListParagraph>Ubuntu</ListParagraph>
              </ListCard>
              <ListCard>
                <DiPhp size="4rem" />
                <ListParagraph>PhpStorm</ListParagraph>
              </ListCard>
            </ListContent>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
