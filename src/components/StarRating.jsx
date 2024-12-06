import { useEffect, useState } from "react";

const StarRating = ({ rate }) => {
  const [rateState, setRateState] = useState(rate);
  const maxStars = 5;

  useEffect(() => {
    setRateState(rate);
  }, [rate]);

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rateState ? "blue" : "none"}
          stroke={index < rateState ? "none" : "blue"}
          className="w-5 h-5"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
