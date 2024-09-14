import React, { useState } from 'react';
import brahma from './../assets/brahma.jpeg';
import fayoumi from './../assets/fayoumi.jpg';
import chickenbrahamgold from './../assets/chickenbrahamgold.png'
import groupfayoumi from './../assets/groupfayoumi.png'

const FarmInfo = () => {
  const [selectedImage, setSelectedImage] = useState(chickenbrahamgold);

  const images = [chickenbrahamgold, fayoumi, brahma, groupfayoumi];

  return (
    <div className="flex flex-col items-center p-6 bg-white">

      <div className=" text-right mt-6 md:mt-0 w-full">
        <h1 className="text-4xl font-bold  text-center my-8">الدواجن</h1>
      </div>

      <div>
        <img 
          src={selectedImage} 
          alt="Farm" 
          className="w-full h-auto rounded-lg shadow-md"
        />
        {/* Thumbnails */}
        <div className="flex mt-4 space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 rounded shadow cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default FarmInfo;
