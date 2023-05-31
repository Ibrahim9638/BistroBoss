import React from 'react';
import { useTitle } from '../../../Hooks/useTitle';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import img from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    useTitle("Our Menu");
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover img={img} title= "Our Menu"></Cover>

            {/* Section Title */}
           <SectionTitle 
           subHeading="---Don't miss---"
           heading="TODAY'S OFFER">
            </SectionTitle> 
            {/* Offered */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts menu items*/}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            
            {/* Soup Menu items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>{/* Soup Menu items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

            {/* salad Menu items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default Menu;