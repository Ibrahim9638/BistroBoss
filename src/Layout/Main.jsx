import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation()
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            {noNavbarFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;