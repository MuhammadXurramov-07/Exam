import React, { useState } from "react";
import "./Cards.scss";
import { Heart, Heart2 } from "../img/data";
import { Link } from "react-router-dom";

export const Cards = ({ title, price, img, id, reyt }) => {
  const [heart, setHeart] = useState(true);
  return (
    <Link className="card" to={`buy/${id}`}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <div className="title">
        <span>{price} $</span>
        <div className="star">
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.627 18.2497L5.41636 22.6079L7.37665 14.4742L0.960938 9.03564L9.38233 8.36796L12.627 0.647087L15.8716 8.36796L24.2943 9.03564L17.8773 14.4742L19.8376 22.6079L12.627 18.2497Z"
              fill="#FFCE7F"
            />
          </svg>
          <span>{reyt}</span>
        </div>
      </div>
      <div className="heart" onClick={() => setHeart(!heart)}>
        {heart ? <Heart /> : <Heart2 />}
      </div>
    </Link>
  );
};
