import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const { name, recipe, image, price, _id } = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()

    const handleAddToCart= (item) =>{
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, recipe, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
          method:'POST',
          headers:{
            'content-type': 'application/json',
          },
          body: JSON.stringify(cartItem)
          
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food Order Successfully',
              showConfirmButton: false,
              timer: 2500
            })
          }
        })
      }
      else{
        navigate('/login', {state: {from: location}})
      }
      
      
    }
    
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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline mt-4 flex justify-center items-center lg:w-48 mx-auto border-0 border-b-4 border-orange-300 bg-slate-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
