import { useState } from "react";
import scandinavianFoodWebp from "../assets/images/scandinavianfood.webp";

const ScandinavianFoodImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <div className={`image-placeholder ${loaded ? "hidden" : ""}`} />
        <img
          src={scandinavianFoodWebp}
          alt="Scandinavian Food"
          className={`image wh-border ${loaded ? "fade-in" : "not-visible"}`}
          onLoad={() => setLoaded(true)}
        />
    </div>
  );
};

export default ScandinavianFoodImage;
