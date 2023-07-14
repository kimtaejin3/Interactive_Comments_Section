import React from "react";
import data from "./data.json";
import Card from "./Card";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const Wrapper = styled.div`
  max-width: 780px;
  margin: 0 auto;
  margin-top: 80px;
`;

const Container = () => {
  return (
    <Wrapper disableGutters maxWidth="md" sx={{ bgcolor: "#cfe8fc" }}>
      {[1, 2].map((v, i) => {
        console.log("check");
        return <Card key={i} isReply={false} />;
      })}
    </Wrapper>
  );
};

export default Container;
