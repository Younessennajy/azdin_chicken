import React, { useState } from 'react';
import chickenbrahmagold from './../assets/chickenbrahmagold.jpeg'
import chickenbrahmawhite from './../assets/chickenbrahmawhite.jpeg'
import chickenfayoumigold from './../assets/chickenfayoumigold.png'
import chickenfayoumyslate from './../assets/chickenfayoumyslate.png'

import eggsbrahma from './../assets/eggsbrahma.jpeg'
import eggsfayoumi from './../assets/eggsfayoumi.jpeg'


import babyfayoumi from './../assets/babyfayoumi.png'
import babybraham from './../assets/babybraham.png'

const ProductCard = ({ image, name, description, price, originalPrice, rating }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      
      {/* Rating */}
      <div className="flex mb-2">
        {Array(rating).fill(0).map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {Array(5 - rating).fill(0).map((_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-green-500 font-bold">{price}</p>
        {originalPrice && (
          <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
        )}
      </div>
    </div>
  );
};

// Main Component rendering a list of products based on the selected category
const ProductList = () => {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('دجاج');

  const productsByCategory = {
    'دجاج': [
      {
        image: chickenbrahmagold,
        name: 'براهام ذهبي',
        description: 'دجاج براهام الذهبي، مثالي للشوي والتحضير في الوصفات التقليدية.',
        price: '$5.99',
        originalPrice: '$7.00 for 1 kg',
        rating: 5,
      },
      {
        image: chickenbrahmawhite,
        name: 'براهام ابيض',
        description: 'دجاج براهام الأبيض الطازج، جاهز للطهي ولذيذ في الأطباق المتنوعة.',
        price: '$10.99',
        originalPrice: '$12.00 for 2 kg',
        rating: 4,
      },
      {
        image: chickenfayoumigold,
        name: 'فيومي ذهبي',
        description: 'دجاج فيومي الذهبي الفاخر، مثالي لتحضير وجبات مغذية.',
        price: '$10.99',
        originalPrice: '$12.00 for 2 kg',
        rating: 4,
      },
      {
        image: chickenfayoumyslate,
        name: 'فيومي فضي',
        description: 'دجاج فيومي الفضي، خيار رائع للأطباق اليومية.',
        price: '$10.99',
        originalPrice: '$12.00 for 2 kg',
        rating: 4,
      },
    ],
    'بيض': [
      {
        image: eggsbrahma,
        name: 'بيض ابراهام',
        description: 'بيض براهام الطازج العضوي، مثالي للإفطار الصحي.',
        price: '$2.99',
        originalPrice: '$4.00 per dozen',
        rating: 5,
      },
      {
        image: eggsfayoumi,
        name: 'بيض فيومي',
        description: 'بيض فيومي البني الطبيعي، غني بالبروتين ومغذي.',
        price: '$3.49',
        originalPrice: '$4.50 per dozen',
        rating: 4,
      },
    ],
    'صغار': [
      {
        image: babyfayoumi,
        name: 'فلوس فيومي',
        description: 'صغار دجاج فيومي، جاهزة للتربية والنمو السريع.',
        price: '$3.00',
        originalPrice: '$4.00 per chick',
        rating: 5,
      },
      {
        image: babybraham,
        name: 'فلوس ابراهام',
        description: 'صغار دجاج ابراهام، قوية ومناسبة للمزارع الصغيرة.',
        price: '$3.00',
        originalPrice: '$4.00 per chick',
        rating: 5,
      },
      
    ],
  };

  const products = productsByCategory[selectedCategory] || [];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">منتجاتنا</h1>

      {/* Dropdown for category selection */}
      <div className="mb-6 text-right">
        <select 
          id="category-select" 
          className="border border-gray-300 rounded-lg p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="دجاج">دجاج</option>
          <option value="بيض">بيض</option>
          <option value="صغار">صغار</option>
        </select>
        <label htmlFor="category-select" className="text-lg font-bold mr-4"> :اختر فئة 
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
