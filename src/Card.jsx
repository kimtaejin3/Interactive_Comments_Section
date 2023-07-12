import React from "react";
import UpdownToggle from "./UpdownToggle";

const Card = ({ isReply }) => {
  return (
    <div>
      <UpdownToggle />
      {!isReply && <div>대답아니다.</div>}
    </div>
  );
};

export default Card;
