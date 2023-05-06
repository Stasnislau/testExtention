import React from "react";
import { IconButton } from "@mui/material";
import botIcon from "../assets/images/bot-icon-24.png";

const TelegramIconButton = (onHover, onMouseLeave) => {
  return (
    <IconButton
      children={<img src={botIcon} alt="bot-icon" />}
      onHover={onHover}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default TelegramIconButton;
