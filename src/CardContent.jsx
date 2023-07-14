import React, { useState } from "react";
import styled from "@emotion/styled";
import CardTop from "./CardTop";
import { css } from "@emotion/css";

const Container = styled.div`
  width: 100%;
`;

const CardContent = ({ user, createdAt, setShowReplyForm }) => {
  return (
    <>
      <Container>
        <CardTop
          user={user}
          createdAt={createdAt}
          setShowReplyForm={setShowReplyForm}
        />

        <p
          className={css`
            color: #67727e;
            line-height: 24px;
          `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatum blanditiis culpa, ipsum harum iure optio in incidunt
          eveniet quam iusto cupiditate corrupti dolorum facere aliquam
          laboriosam quia quos explicabo?
        </p>
      </Container>
    </>
  );
};

export default CardContent;
