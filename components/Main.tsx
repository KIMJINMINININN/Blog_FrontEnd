import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  h1 {
    font-size: 21px;
  }
`;

const Main: React.FC = () => {
  return (
    <Container>
      <h1>김길현씨김길현씨김길현씨김길현씨김길현씨김길현씨</h1>
    </Container>
  );
};

export default Main;
