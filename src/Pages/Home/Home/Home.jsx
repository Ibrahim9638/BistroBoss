import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../../Category/Category';
import PopularMenu from '../../PopularMenu/PopularMenu';
import Features from '../../Features/Features';
import Testimonial from '../../Testimonial/Testimonial';
import { useTitle } from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;