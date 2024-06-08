import { useEffect, useState, useMemo } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import UseAxios from "../hooks/UseAxios";
import UseCart from "../hooks/UseCart";

const Shop = () => {
    const { id, num, shopNum } = useParams();
    const data = useLoaderData();
    const shoppingMalls = useMemo(() => data || [], [data]);
    const [shop, setShop] = useState(null);
    const axiosSecure = UseAxios();
    const { refetch } = UseCart();
    const [quantities, setQuantities] = useState({}); // State to hold quantities for each product

    const handleAddCart = (product) => {
        const quantity = quantities[product.productName] || 1; // Default to 1 if no quantity is set
        const cartItem = {
            menuID: id,
            shopNum: shopNum,
            productName: product.productName,
            price: product.price,
            quantity: quantity // Add quantity to the cart item
        };

        axiosSecure.post('/collection', cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${product.productName} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
            .catch(error => {
                console.error("There was an error adding the item to the cart:", error);
            });
    };

    useEffect(() => {
        if (shoppingMalls.length > 0) {
            const filteredItems = shoppingMalls.filter(item => item.id === id);
            if (filteredItems.length > 0) {
                const floors = filteredItems[0].floors;
                const filteredFloor = floors.find(floor => floor.num === num);
                if (filteredFloor) {
                    const filteredShop = filteredFloor.shops.find(shop => shop.shopNum === shopNum);
                    setShop(filteredShop);
                }
            }
        }
    }, [id, num, shopNum, shoppingMalls]);

    const handleQuantityChange = (productName, value) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productName]: value
        }));
    };

    console.log("Loaded data in Shop:", shop); // Debug logging

    if (!shop) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="text-start my-10 md:ml-10">
                <h1 className="container text-blue-950 mx-auto font-sedan text-4xl border-blue-950 border-l-8 pl-10 font-semibold">SHOP: <span className="font-rubik">{shop.shopName}</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto my-20">
                {
                    shop.products.map((product, idx) => (
                        <div key={idx}>
                            <div className="max-w-xs overflow-hidden bg-blue-50 rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="px-4 py-2">
                                    <h1 className="text-xl font-bold text-blue-900 uppercase dark:text-white">{product.productName}</h1>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                                </div>
                                <img src={product.photo} className="object-cover w-full h-48 mt-2" alt={product.productName} />
                                <div className="flex items-center justify-between px-4 py-2 bg-blue-950">
                                    <h1 className="text-lg font-bold text-white">$ {product.price}</h1>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            value={quantities[product.productName] || 1}
                                            onChange={(e) => handleQuantityChange(product.productName, e.target.value)}
                                            className="w-16 p-1 text-center border rounded-md"
                                            min="1"
                                        />
                                        <button
                                            onClick={() => handleAddCart(product)}
                                            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none ml-2">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;