import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Menu from '../Shared/Menu/Menu';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('/public/menu.json')
        .then(res =>res.json())
        .then(data => {
            const popularItem = data.filter(items => items.category === "popular")
            setMenu(popularItem);
        })
    },[])
    return (
        <section className='mb-24'>
            <SectionTitle
            subHeading="---Check it out---"
            heading = "FROM OUR MENU"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 '>
                {
                    menu.map(item => <Menu
                    key={item._id}
                    item = {item}
                    ></Menu>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;