import React, { useCallback, useState } from "react";
import { SingleImage } from "../../types/images.types";
import Image from "../Image";
import "./styles.scss";

type Props = {
  images: SingleImage[];
};

const ImagesGrid: React.FC<Props> = ({ images }) => {
  const [clicksCount, setClicksCount] = useState<Record<string, number>>({});
  const [totalClicks, setTotalClicks] = useState(0);

  const handleClick = useCallback(
    (id: string) => {
      setClicksCount({
        ...clicksCount,
        [id]: clicksCount[id] ? clicksCount[id] + 1 : 1,
      });
      setTotalClicks(totalClicks + 1);
    },
    [clicksCount, totalClicks]
  );

  const resetClicks = useCallback(() => {
    setClicksCount({});
    setTotalClicks(0);
  }, []);

  return (
    <div className="images-grid">
      {images.map((image) => (
        <div className="images-grid__column" key={image.id}>
          <Image
            onClick={() => handleClick(image.id)}
            image={image}
            count={clicksCount[image.id] || 0}
          />
        </div>
      ))}
      <div className="images-grid__counter">
        <span className="images-grid__counter-count">{totalClicks}</span>
        <button
          type="button"
          onClick={resetClicks}
          className="images-grid__reset-btn"
        >
          Reset counts
        </button>
      </div>
    </div>
  );
};

export default ImagesGrid;
