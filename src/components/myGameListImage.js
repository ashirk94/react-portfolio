import { useState } from "react";
import myGameListWebp from "../assets/images/mygamelist.webp";

const MyGameListImage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <div className={`image-placeholder ${loaded ? "hidden" : ""}`} />
        <img
          src={myGameListWebp}
          alt="MyGameList"
          className={`image wh-border ${loaded ? "fade-in" : "not-visible"}`}
          onLoad={() => setLoaded(true)}
        />
    </div>
  );
};

export default MyGameListImage;
