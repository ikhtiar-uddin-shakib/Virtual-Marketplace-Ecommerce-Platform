import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
const Category = () => {
    const shoppingMall = useLoaderData();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Our Shopping Mall Collection:{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    <Typewriter
                        words={[' Find Your Favorites Here!', 'Favorite Shopping Destinations!', 'Preferred Shopping Destinations!', 'Browse Shopping Spots!']}
                        loop={30}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 container mx-auto my-20">
                {
                    shoppingMall.shoppingMalls.map((mall, index) => <div key={index} className="max-w-2xl  bg-blue-50 rounded-lg shadow-md dark:bg-gray-800 z-0">

                        <img src={mall.photo} className="object-cover w-full h-64" alt="" />
                        <div className="p-6">
                            <div>
                                <span className="text-xs font-medium text-blue-600  dark:text-blue-400">{mall.add}</span>
                                <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{mall.name}</a>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{mall.description}</p>
                            </div>
                            
                            <details className="dropdown container mx-auto my-4">
                                <summary className="m-1 btn bg-blue-900 text-white hover:text-black px-10 w-full">FLOOR</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-pink-100 rounded-box w-52">
                                {
                                    mall.floors.map((floor ,idx) => <Link key={idx} to={`/floor/${mall.id}/${floor.num}`}><li><a className="font-semibold hover:text-blue-800">Floor : {floor.num}</a></li></Link>)
                                }
                                </ul>
                            </details>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;