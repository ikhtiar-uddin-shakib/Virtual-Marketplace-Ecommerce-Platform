import Banner from "../Components/Banner/Banner";
import Explore from "../Components/Explore";
import Testimonial from "../Components/Testimonial";
import ShoppingCard from "../Components/card/ShoppingCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShoppingCard></ShoppingCard>
            <Explore></Explore>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;