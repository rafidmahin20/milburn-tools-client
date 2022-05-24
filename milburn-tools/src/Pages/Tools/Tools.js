import React from "react";

const Tools = ({ tool }) => {
  const {
    _id,
    name,
    picture,
    price,
    min_order,
    available_quantity,
    short_description,
  } = tool;
  return (
   <section className="mb-10 px-12">
        <div className="max-w-xs mx-auto overflow-hidden bg-white dark:bg-red-500 rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-black">
          {name}
        </h1>
        <h5 className="text-xl font-bold text-gray-800  dark:text-black">
          Minimum Order: {min_order}
        </h5>
        <h5 className="text-xl font-bold text-gray-800  dark:text-black">
          Available Quantity: {available_quantity}
        </h5>
        <h5 className="mt-1 text-xl font-bold text-gray-800  dark:text-black">Details: 
           {short_description}
        </h5>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={picture}
        alt="hammer"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">{price}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </div>
    </div>
   </section>
  );
};

export default Tools;
