import React, { useState } from "react";
import UpdownToggle from "./UpdownToggle";
import CardContent from "./CardContent";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Avatar from "@mui/material/Avatar";
const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: white;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 1s linear;
`;

const Card = ({ currentUser }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  console.log(showReplyForm);
  const onClickHandler = () => {
    setShowReplyForm(false);
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
          setShowReplyForm={setShowReplyForm}
        />
      </Container>

      {/* "replies" */}
      <div
        className={css`
          background-color: white;
          margin: 5px 0;
          margin-left: 50px;
          margin-top: 20px;
          margin-bottom: 20px;
          padding-left: 50px;
          border-left: 5px solid;
        `}
      >
        ReComments
      </div>

      {/* from에 입력하면 reply 배열에 추가하기 */}
      {showReplyForm && (
        <ReplyForm>
          <div>
            <Avatar src={currentUser.image.png} />
          </div>
          <div
            className={css`
              flex-grow: 1;
            `}
          >
            <form
              className={css`
                display: flex;
                align-items: flex-start;
                gap: 20px;
              `}
            >
              <textarea
                className={css`
                  flex-grow: 1;
                  height: 100px;
                  border-radus: 20px;
                  overflow: hidden;
                  border: none;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  padding: 10px;
                  &::placeholder {
                    font-size: 16px;
                    color: #67727e;
                    font-family: "Consolas";
                  }
                `}
                placeholder="Add a comment"
                type="text"
              />
              <button
                className={css`
                  border: none;
                  background-color: #5357b6;
                  color: white;
                  border-radius: 8px;
                  width: 104px;
                  height: 48px;
                `}
              >
                Send
              </button>
            </form>
          </div>
        </ReplyForm>
      )}
    </div>
  );
};

const ReplyForm = styled.div`
  background-color: white;
  padding: 25px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
`;

export default Card;
