import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid;
  /* max-width: 1080px; */
  /* margin: 0 auto; */
  h1 {
    font-size: 21px;
    cursor: pointer;
  }
`;
const Footer: React.FC = () => {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  );
};

export default Footer;
