import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import feature from '../../assets/home/featured.jpg'
import './Features.css'

const Features = () => {
    return (
        <div className='feature-item bg-fixed text-white '>
            <div className='bg-black bg-opacity-60 pt-8 my-20'>
            <SectionTitle
            subHeading="---Check it out---"
            heading="FROM OUR MENU"
            ></SectionTitle>
            <div className='lg:flex justify-center items-center lg:pb-20 lg:pt-12 lg:px-36 p-6'>
                <div>
                    <img className='rounded' src={feature} alt="" />
                </div>
                <div className='lg:ml-10'>
                    <h4 className='lg:text-xl mb-1'>March 20, 2023</h4>
                    <h3 className='text-xl mb-1'>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quasi facere repellendus cum reiciendis culpa nobis perspiciatis autem delectus, voluptates, sed dignissimos illum in deleniti quaerat necessitatibus numquam ad temporibus. Voluptate et quia labore fugiat illum itaque aliquid natus velit.</p>

                    <button className="btn btn-outline mt-4 border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Features;