import React from 'react';

const Facts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <h1 className="text-4xl font-bold mt-2  text-center">حقائق</h1>
      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className="text-green-500 text-4xl mb-2">
          😊
        </div>
        <div className="text-3xl font-semibold">
         32
        </div>
        <div className="text-gray-600">
          رضاء العملاء
        </div>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-green-500 text-4xl mb-2">
          🐔
        </div>
        <div className="text-3xl font-semibold">
          5
        </div>
        <div className="text-gray-600">
          انواع
        </div>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-green-500 text-4xl mb-2">
          🥚
        </div>
        <div className="text-3xl font-semibold">
          500+
        </div>
        <div className="text-gray-600">
         بيضة
        </div>
      </div>

      
    </div>
  );
};

export default Facts;
