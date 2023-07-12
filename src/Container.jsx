import React from "react";
import data from "./data.json";
// import Subcontainer from "@mui/material/Container";
// import Box from "@mui/material/Box";
import Card from "./Card";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 780px;
  box-shadow: inset 5px royalblue;
  background-color: royalblue;
  margin: 0 auto;
`;

const Container = () => {
  return (
    <Wrapper disableGutters maxWidth="md" sx={{ bgcolor: "#cfe8fc" }}>
      <Card isReply={false} />
    </Wrapper>
  );
};

export default Container;
