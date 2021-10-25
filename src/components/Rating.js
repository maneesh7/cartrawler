import React from "react";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const Rating = ({ rating }) => {
  const includeHalf = rating % 2 !== 0;
  return (
    <div>
      {Array(Math.floor(rating))
        .fill(0)
        .map((_, i) => (
          <StarOutlinedIcon key={i} color="primary" />
        ))}

      {includeHalf && <StarHalfOutlinedIcon color="primary" />}
    </div>
  );
};

export default Rating;
