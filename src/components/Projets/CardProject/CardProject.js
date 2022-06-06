import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BlogCard, CardTitle, Img } from "./CardProjectStyles";

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
        {/*<Title>{description}</Title>*/}
      </BlogCard>
    </ReactCardFlip>
  );
}

export default CardProject;
