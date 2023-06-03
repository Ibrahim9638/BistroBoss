import React from "react";
import { useTitle } from "../../../Hooks/useTitle";
import useCart from "../../../Hooks/useCart";
import { AiFillDelete } from "react-icons/Ai";
import Swal from "sweetalert2";

const MyCart = () => {
  useTitle("MyCart");

  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`,{
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            } 
          })

        }
      })
  };

  return (
    <div className="w-full">
      <div className="flex justify-evenly items-center m-8 ">
        <h2>This is my cart: {cart.length}</h2>
        <h3>Total Price: ${total}</h3>
        <button className="btn btn-sm btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* item 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn-ghost btn-sm rounded-md bg-red-600 text-white text-xl"
                  >
                    {" "}
                    <AiFillDelete></AiFillDelete>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
