import React, { useCallback, useState } from "react";
import { borderColors, defaultImageMaxClicks } from "../../constants";
import { SingleImage } from "../../types/images.types";
import "./styles.scss";

type Props = {
  image: SingleImage;
  onClick: () => void;
  count: number;
};

const Image: React.FC<Props> = ({ image, onClick, count }) => {
  const [imageUrl, setImageUrl] = useState(image.download_url);

  const generateRandomColor = () => {
    const randomColor =
      borderColors[Math.floor(Math.random() * borderColors.length)];
    return randomColor;
  };

  const handleClick = useCallback(() => {
    if (count < defaultImageMaxClicks) {
      setImageUrl(
        `https://picsum.photos/500/600?random=${Math.random() * 100}`
      );
      onClick();
    }
  }, [onClick, count]);

  return (
    <div
      onClick={handleClick}
      className={`image-wrapper ${count >= 5 ? "image-wrapper--disabled" : ""}`}
      style={{
        borderColor: generateRandomColor(),
      }}
    >
      <img
        className="image-wrapper__img"
        src={imageUrl || image.download_url}
        alt=""
      />
    </div>
  );
};

export default Image;
