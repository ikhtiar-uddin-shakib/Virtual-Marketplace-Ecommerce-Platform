import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Shop = () => {
    const { id , num, shopNum  } = useParams();
    const { shoppingMalls } = useLoaderData();
    const filteredItems = shoppingMalls.filter(item => item.id === id);
    const [floor, setFloor] = useState([]);
    const [shop, setShop] = useState([]);
    useEffect(() => {
        const floors = filteredItems.length > 0 ? filteredItems[0].floors : [];
        const filteredFloor = floors.find(floor => floor.num === num);
        setFloor(filteredFloor);
    }, [num, filteredItems]);
    const { shops } = floor;

    useEffect(() => {
        const filteredShop = shops?.find(shop => shop.shopNum === shopNum);
        setShop(filteredShop);
    }, [shopNum, shops])
    return (
        <div>

            <div className="text-start my-10 md:ml-10">
                <h1 className="container text-blue-950 mx-auto font-sedan text-4xl border-blue-950 border-l-8 pl-10 font-semibold  ">SHOP  : <span className="font-rubik">{shop?.shopName}</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto my-20">
                {
                    shop?.products?.map((product, idx) => <div key={idx}>
                        <div className="max-w-xs  overflow-hidden bg-blue-50 rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="px-4 py-2">
                                <h1 className="text-xl font-bold text-blue-900 uppercase dark:text-white">{product.productName}</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                            </div>
                            <img src={product.photo} className="object-cover w-full h-48 mt-2" alt="" />
                            <div className="flex items-center justify-between px-4 py-2 bg-blue-950">
                                <h1 className="text-lg font-bold text-white">$ {product.price}</h1>
                                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Shop;