import React, { useState } from "react";
import TelegramIconButton from "./telegramIconButton.jsx";
import Banner from "./banner.jsx";

const InputModifier = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleHover = () => {
    setIsBannerVisible(true);
    setIsButtonVisible(false);
  };

  const handleMouseLeave = () => {
    setIsBannerVisible(false);
    setIsButtonVisible(true);
  };

  return (
    <div>
      {isButtonVisible && (
        <TelegramIconButton
          onHover={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      )}
      {isBannerVisible && <Banner />}
    </div>
  );
};

export default InputModifier;
