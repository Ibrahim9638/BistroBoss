import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import useCart from '../../../Hooks/useCart';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch((error)=>{console.log(error);});
    }
    const navItems = <>
 
    <li><Link to='/' className='font-extrabold'>Home</Link></li>
    <li><Link to='/menu' className='font-extrabold'>Our Menu</Link></li>
    <li><Link to='/order/salad' className='font-extrabold'>Order Food</Link></li>
    <li>
      <Link to='dashboard/my-cart'>
          <button className="btn gap-2  btn-xs">
          <AiOutlineShoppingCart/>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
      </Link>
    </li>
    <li><Link to='/secret' className='font-extrabold'>Secret</Link></li>
    {
      user ? 
      <>
       <img  style={{width:'50px', height:'50px', borderRadius:'50%'}}
       src={user?.photoURL} alt="" title={user?.displayName}  />

      <button onClick={handleLogOut} className="font-extrabold pl-2">Logout</button>
      </> : 
      <>
      <li><Link to='/login' className='font-extrabold'>Login</Link></li>
      </>
    }

  
    
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BistroBoss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  
</div>
    );
};

export default NavBar;