import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 145px;
  border-bottom: #555;
  border: 1px solid;
  .header-wrap{
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 21px;
  }
`;
const Header: React.FC = () => {
  return (
    <Container>
      <div className="header-wrap">
        (HEADER)
        WE'RE BLOG
      </div>
    </Container>
  );
};

export default Header;
