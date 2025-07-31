import { useState } from "react";
import produceShopWebp from "../assets/images/produceshop.webp";

const ProduceShopImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <div className={`image-placeholder ${loaded ? "hidden" : ""}`} />
        <img
          src={produceShopWebp}
          alt="Produce Shop"
          className={`image wh-border ${loaded ? "fade-in" : "not-visible"}`}
          onLoad={() => setLoaded(true)}
        />
    </div>
  );
};

export default ProduceShopImage;
