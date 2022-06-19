import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ListType } from "../types/list";
import axios from "../lib";

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
  .article-in{
    display: flex;
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
  }
`;

const ContentItem: React.FC = () => {
  const count = useState<ListType["count"]>(0);

  //* api test 진행
  const test = async (event: any) => {
    try {
      const data = await axios("test");
      console.log("data : ", data);
    } catch (e) {
      console.log(e);
    }
  };

  const tempItem = Array.from(Array(5), (_, index) => index + 1);

  return (
    <Container>
      <div className="article-header">
        <span>전체글</span>
        <p>{count}</p>
      </div>
      <div className="article-in">
        {tempItem.map((item) => (
          <div className="article-inner">
            <div className="article-inner-item">
              <span className="article-inner-image">image</span>
              <span className="article-inner-title">title</span>
              <span className="article-inner-content">content</span>
              <span className="article-inner-date">date</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContentItem;
