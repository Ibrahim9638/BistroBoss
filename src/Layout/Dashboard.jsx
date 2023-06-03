
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FcHome } from 'react-icons/Fc';
import { SlCalender } from 'react-icons/Sl';
import { FaWallet,FaCartArrowDown } from 'react-icons/Fa';
import { AiOutlineMenu } from 'react-icons/Ai';
import { MdFastfood } from 'react-icons/Md';
import useCart from '../Hooks/useCart';


const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center ">

    {/* Page content here */}
    <Outlet></Outlet>

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
      {/* Sidebar content here */}
      <li><NavLink to="/"><FcHome></FcHome>User Home</NavLink></li>
      <li><NavLink to="/"><SlCalender></SlCalender>Calender</NavLink></li>
      <li><NavLink to="/"><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/my-cart'><FaCartArrowDown></FaCartArrowDown>My Cart: 
        {cart?.length || 0}</NavLink></li>
      
      <div className="divider"></div>

      <li><NavLink to='/'><FcHome></FcHome>Home</NavLink></li>
      <li><NavLink to='/menu'><AiOutlineMenu></AiOutlineMenu> Our Menu</NavLink></li>
      <li><NavLink to='/order/salad'><MdFastfood></MdFastfood>Order Food</NavLink></li>
    </ul>
  
  </div>
</div>

  );
};

export default Dashboard;