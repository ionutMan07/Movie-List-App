import React from 'react';
import TrashIcon from '@material-ui/icons/Delete';

const RemoveFavorites = () => {
  return (
    <div>
      <span className="mr-2">Remove from favorites</span>
      <TrashIcon />
    </div>
  );
};

export default RemoveFavorites;
