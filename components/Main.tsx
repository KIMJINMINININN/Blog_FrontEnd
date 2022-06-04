import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Container = styled.div`
  /* display: flex; */
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Link href="/test">
        <Content />
      </Link>
      <Footer />
    </Container>
  );
};

export default Main;
