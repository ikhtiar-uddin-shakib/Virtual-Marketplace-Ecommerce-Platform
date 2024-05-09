import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Floor = () => {
    const { id , num  } = useParams();
    const { shoppingMalls } = useLoaderData();
    const filteredItems = shoppingMalls.filter(item => item.id === id);
    const [floor, setFloor] = useState([]);
    useEffect(() => {
        const floors = filteredItems.length > 0 ? filteredItems[0].floors : [];
        const filteredFloor = floors.find(floor => floor.num === num);
        setFloor(filteredFloor);
    }, [num, filteredItems]);
    console.log(floor.floor);
    return (
        <div>
            <div className="text-start my-10 md:ml-10">
                <h1 className="container text-blue-950 mx-auto font-sedan text-4xl border-blue-950 border-l-8 pl-10 font-semibold  ">FLOOR  : <span className="font-rubik">{floor.num}</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto my-10">
                {
                    floor?.shops?.map((shop, idx) => <div key={idx} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 bg-gray-300 bg-center bg-cover object-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${shop.photo})` }}></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-blue-800 bg-pink-50 uppercase dark:text-white">{shop.shopName}</h3>

                            <div className="flex items-center justify-between px-3 py-2 bg-blue-50 dark:bg-gray-700">
                                <span className="font-bold text-gray-800 dark:text-gray-200">{shop.shopNum}</span>
                                <Link to={`/shop/${id}/${num}/${shop.shopNum}`}><button className="px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Let`s Shopping</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Floor;