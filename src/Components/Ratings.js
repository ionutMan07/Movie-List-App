import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/StarOutlined';

const Ratings = () => {

 
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('ratings', JSON.stringify(items));
  };
  const saveRating = (item) => {
    setRating(item);
    return saveToLocalStorage(rating)
  }

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
            />
            <StarIcon
              className={ratingValue <= (hover || rating) ? 'star' : 'regularStar'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              
            />
          </label>
        );
      })}
    </>
  );
};

export default Ratings;
