import React from "react";

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <p className="absolute right-4 top-2 bg-black px-4 py-2 font-bold rounded text-white">${price}</p>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col justify-center items-center text-center">
        <h2 className="card-title font-bold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline mt-4 flex justify-center items-center lg:w-48 mx-auto border-0 border-b-4 border-orange-300 bg-slate-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
