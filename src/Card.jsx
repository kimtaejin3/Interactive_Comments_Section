import React, { useState } from "react";
import UpdownToggle from "./UpdownToggle";
import CardContent from "./CardContent";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: white;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 1s linear;
`;

const Card = ({ isReply }) => {
  const [showReply, setShowReply] = useState(false);
  console.log("check2");
  const onClickHandler = () => {
    setShowReply(false);
  };

  return (
    <div
      className={css`
        margin-top: 30px;
      `}
    >
      <Container>
        <UpdownToggle />
        <CardContent
          user={{
            username: "amyrobson",
            image: {
              png: "./images/avatars/image-amyrobson.png",
              webp: "./images/avatars/image-amyrobson.webp",
            },
          }}
          createdAt="1 month ago"
          setShowReply={setShowReply}
        />
      </Container>

      {/* Reply */}
      <div
        className={css`
          background-color: royalblue;
          margin: 5px 0;
          margin-left: 50px;
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      >
        ReComments
      </div>

      {showReply && (
        <div
          className={css`
            @keyframes move {
              0% {
                margin-top: -200px;
                opacity:0;
              }
              50% {
                margin-top: -100px
                opacity:0.5;
              }
              100%{
                margin-top:0;
                opacity:1;
              }
            }

            animation-duration: 1s;
            animation-name: move;
            margin-bottom:150px;

          `}
        >
          Reply Component
          <button onClick={onClickHandler}>X</button>
        </div>
      )}
    </div>
  );
};

export default Card;
