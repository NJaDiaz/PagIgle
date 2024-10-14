import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";

const itemData = [
  {
    img: 'https://images.pexels.com/photos/16104977/pexels-photo-16104977/free-photo-of-blanco-y-negro-ciudad-restaurante-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Image 1',
  },
  {
    img: 'https://images.pexels.com/photos/2878785/pexels-photo-2878785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Image 2',
  },
  {
    img: 'https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg',
    title: 'Image 3',
  },
  {
    img: 'https://images.pexels.com/photos/2878785/pexels-photo-2878785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Image 4',
  },
  {
    img: 'https://images.pexels.com/photos/16104977/pexels-photo-16104977/free-photo-of-blanco-y-negro-ciudad-restaurante-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Image 5',
  },
];

const Imagenes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemData.length);
    }, 5000); 

   
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-gallery">
      <figure>
        <img
          className="h-96 w-full rounded-lg object-cover object-center"
          src={`${itemData[currentIndex].img}?w=1260&h=750&fit=crop&auto=format`}
          alt={itemData[currentIndex].title}
          loading="lazy"
        />
        <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
          {itemData[currentIndex].title}
        </Typography>
      </figure>
    </div>
  );
};

export default Imagenes;
