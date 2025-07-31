import { useState } from "react";
import bloomWebp from "../assets/images/bloom.webp";

const BloomImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <div className={`image-placeholder ${loaded ? "hidden" : ""}`} />
        <img
          src={bloomWebp}
          alt="Bloom"
          className={`image wh-border ${loaded ? "fade-in" : "not-visible"}`}
          onLoad={() => setLoaded(true)}
        />
    </div>
  );
};

export default BloomImage;
