import React from "react";
import styled from "styled-components";

const ImageCard = styled.img`
  color: #fff;
  width: 33.33%;
  background-size: contain;
`;

const Template = (props) => {
  console.log(props.templateData.width);
  return (
    <ImageCard
      style={{
        backgroundImage: `url(${props.templateData.url})`,
        height: `${props.templateData.height}px`,
      }}
    ></ImageCard>
  );
};

export default Template;
