import React, { useState } from "react";
import styled from "styled-components";
import ContentItem from "./ContenItem";

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid;
  display: flex;
  h1 {
    font-size: 21px;
    cursor: pointer;
  }
  .content-article{
    max-width: 1080px;
    margin: 0 auto;
  }
  .content-aside{
    max-width: 1080px;
  }
`;

const Content: React.FC = () => {
  return (
    <Container>
      <article className="content-article">
        <ContentItem />
      </article>
      <aside className="content-aside">
        <div className="sideMenu1">menu1</div>
        <div className="sideMenu2">menu2</div>
      </aside>
    </Container>
  );
};

export default Content;
