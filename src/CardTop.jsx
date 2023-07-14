import React from "react";
import Avatar from "@mui/material/Avatar";
import ReplyIcon from "@mui/icons-material/Reply";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/css";

const CardTop = ({ user, createdAt, setShowReplyForm }) => {
  const handleClick = () => {
    if (setShowReplyForm) {
      setShowReplyForm((prev) => !prev);
    }
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          alt={user.username}
          src={user.image.png}
          sx={{ width: 32, height: 32 }}
        />
        <div
          className={css`
            font-weight: bold;
          `}
        >
          {user.username}
        </div>
        <div
          className={css`
            opacity: 0.5;
          `}
        >
          {createdAt}
        </div>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.4}>
        <ReplyIcon
          className={css`
            color: #5357b6;
            cursor: pointer;
          `}
          onClick={handleClick}
        />
        <div
          className={css`
            font-weight: bold;
            color: #5357b6;
          `}
        >
          Reply
        </div>
      </Stack>
    </Stack>
  );
};

export default CardTop;
