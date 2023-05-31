import React from "react";
import FoodItem from "../../Shared/FoodItem/FoodItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-6">
        { title && <Cover img={img} title= {title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-12 ">
        {items.map((item) => (
          <FoodItem key={item._id} item={item}></FoodItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline mb-4 flex justify-center items-center lg:w-48 mx-auto border-0 border-b-4 ">Order your food</button></Link>
    </div>
  );
};

export default MenuCategory;
