import { Link } from "react-router-dom";


const Explore = () => {
    return (
        <div className="hero min-h-screen bg-pink-50 lg:my-20 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://i.ibb.co/C6rL0dj/demo3.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/rQVGq6w/demo7.png" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-blue-800 font-sedan font-bold'>Let`s Explore</h3>
                    <h1 className="text-5xl font-bold">ShopVista Treasures: Exclusive Deals and Unique Finds Today!</h1>
                    <p className="py-6">Welcome to the heart of ShopVista - the Explore section! Here, you embark on a journey through a treasure trove of diverse products and irresistible deals. Discover the latest trends, hottest items, and exclusive offers curated just for you. Dive in, explore, and uncover your next must-have item today!</p>
                    <p className="py-6">Step into the vibrant world of exploration at ShopVista`s dedicated Explore section. Here, every click unveils a new adventure as you browse through our carefully curated collection of products, handpicked to delight and inspire.</p>
                    <Link to='/category'><button className="btn bg-blue-900 text-white hover:text-black">Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Explore;