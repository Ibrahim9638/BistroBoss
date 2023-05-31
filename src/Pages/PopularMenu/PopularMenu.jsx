import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FoodItem from '../Shared/FoodItem/FoodItem';
import useMenu from '../../Hooks/useMenu';


const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-24'>
            <SectionTitle
            subHeading="---Check it out---"
            heading = "FROM OUR MENU"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 '>
                {
                    popular.map(item => <FoodItem
                    key={item._id}
                    item = {item}
                    ></FoodItem>)
                }
            </div>
            <button className="btn btn-outline mt-4 flex justify-center items-center lg:w-48 mx-auto border-0 border-b-4 ">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;