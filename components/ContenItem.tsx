import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ListType } from "../types/list";

const Container = styled.div`
  max-width: 1080px;
  .article-header{
    display:flex;
    span{
        font-size: 1em;
        line-height: 1.375;
    }
    p{
        color: #04beb8;
    }
  }
  .article-inner{
      .article-inner-item{
        width: 230px;
        height: 287px;
        display: grid;
        border: 1px solid;
        .article-inner-image{
            width: 100%;
            height: 140px;
        }
        .article-inner-title{
            width: 100%;
            :hover{
                text-decoration: underline;
            }
        }
      }
  }
`;

const ContentItem: React.FC = () => {
  const count = useState<ListType["count"]>(0);
  return (
    <Container>
      <div className="article-header">
        <span>전체글</span>
        <p>{count}</p>
      </div>
      <div className="article-inner">
        <div className="article-inner-item">
          <span className="article-inner-image">image</span>
          <span className="article-inner-title">title</span>
          <span className="article-inner-content">content</span>
          <span className="article-inner-date">date</span>
        </div>
      </div>
    </Container>
  );
};

export default ContentItem;
