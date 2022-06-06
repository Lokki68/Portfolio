import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  BlogCard,
  CardInfo,
  CardTitle,
  ExternalLink,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./CardProjectStyles";
import { SectionDivider } from "../../../styles/GlobalComponents";

function CardProject({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { title, description, tags, image, source, visit } = project;

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipSpeedFrontToBack="0.3">
      <BlogCard noPadding onClick={handleClick}>
        <Img src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
      </BlogCard>
      <BlogCard onClick={handleClick}>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLink href={visit}>Page</ExternalLink>
          <ExternalLink href={source}>Code</ExternalLink>
        </UtilityList>
      </BlogCard>
    </ReactCardFlip>
  );
}

export default CardProject;
