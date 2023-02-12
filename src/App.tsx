import React, { useEffect, useState } from "react";
import ImagesGrid from "./components/ImagesGrid";
import { defaultImagesNumber } from "./constants";
import { fetchImages } from "./services/api";
import "./styles/index.scss";
import { SingleImage } from "./types/images.types";

const App: React.FC = () => {
  const [images, setImages] = useState<SingleImage[]>([]);

  useEffect(() => {
    fetchImages(defaultImagesNumber).then((data) => setImages(data));
  }, []);

  return (
    <section className="images-section">
      <div className="container">
        <ImagesGrid images={images} />
      </div>
    </section>
  );
};

export default App;
