import React, { useState, useRef, memo } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { blueGrey, lightBlue, pink } from "@mui/material/colors";

//메모 적용하기
const UpdownToggle = memo(() => {
  // data.json에서 score를 받아야함.
  const [liked, setLiked] = useState(0);
  const isClickLiked = useRef(false);

  const onPlusClick = () => {
    if (!isClickLiked.current) {
      setLiked((prevItems) => prevItems + 1);
    }
    isClickLiked.current = true;
  };

  const onMinusClick = () => {
    if (!isClickLiked.current) {
      setLiked((prevItems) => prevItems - 1);
    }
    isClickLiked.current = true;
  };

  return (
    <Toggle>
      <AddIcon
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          color: blueGrey[200],
        }}
        onClick={onPlusClick}
      />
      <Span>{liked}</Span>
      <RemoveIcon
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
          color: blueGrey[200],
        }}
        onClick={onMinusClick}
      />
    </Toggle>
  );
});

const Span = styled.span`
  color: #5357b6;
  font-size: 16px;
  font-weight: bold;
`;

const Toggle = styled.div`
  width: 40px;
  height: 100px;
  background-color: #f5f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export default UpdownToggle;
