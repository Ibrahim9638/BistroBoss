import React from 'react';

const FoodItem = ({item}) => {
    const { name, recipe, image, price } = item;
    return (     
    <div className="flex space-x-4 mb-4 px-4">
      <img className="md:w-[100px] w-[70px] h-[70px]" 
      style={{borderRadius:'0 200px 200px 200px'}} 
      src={image} alt="" />
      <div className="ml-4">
        <h3 className="md:text-lg uppercase">{name} -------------</h3>
        <p>{recipe}</p>
      </div>
      <div>
        <h3 className="text-warning">${price}</h3>
      </div>
      
    </div>
  );
};

export default FoodItem;