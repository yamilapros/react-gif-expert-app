import React from 'react';

const GifGridItem = ({ id, title, url }) => {
  return (
      <div className='animate__animated animate__bounce'>
            <img 
                src={url}
                alt={title}
            />
            <h4>{title}</h4>
      </div>
  );
};

export default GifGridItem;
