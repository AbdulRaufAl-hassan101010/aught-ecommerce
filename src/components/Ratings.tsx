import React from "react";
import {
  faStarHalfAlt,
  faStar as SolidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RatingsProps {
  rating: number;
  totalReviews?: number;
  className?: string;
}

const Ratings = ({ totalReviews, rating }: RatingsProps) => {
  return (
    <div className="flex h-5 items-center overflow-hidden">
      {Array.from({ length: 5 }).map((_, index) => {
        if (rating - index >= 1) {
          return (
            <FontAwesomeIcon
              icon={SolidStar}
              className={`text-blue-400`}
              key={index}
              color="#60a5fa"
            />
          );
        } else if (rating - index >= 0.5 && rating - index < 1) {
          return (
            <FontAwesomeIcon icon={faStarHalfAlt} key={index} color="#60a5fa" />
          );
        } else {
          return <FontAwesomeIcon icon={faStar} key={index} color="#60a5fa" />;
        }
      })}
      {totalReviews && (
        <span className="ml-1 text-gray-500">({totalReviews})</span>
      )}
    </div>
  );
};

export default Ratings;
