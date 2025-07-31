import { useState } from "react";
import rentTechWebp from "../assets/images/renttech.webp";

const RentTechImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <div className={`image-placeholder ${loaded ? "hidden" : ""}`} />
        <img
          src={rentTechWebp}
          alt="Rent Tech"
          className={`image wh-border ${loaded ? "fade-in" : "not-visible"}`}
          onLoad={() => setLoaded(true)}
        />
    </div>
  );
};

export default RentTechImage;
