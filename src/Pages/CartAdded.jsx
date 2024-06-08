import { useState } from "react";
import UseCart from "../hooks/UseCart";
import { Link } from "react-router-dom";

const CartAdded = () => {
    const { collection, deleteItem, updateItem } = UseCart(); // Use the UseCart hook to get the cart items and mutation functions
    const [editItem, setEditItem] = useState(null);
    const [newQuantity, setNewQuantity] = useState(1);

    const handleDelete = (id) => {
        deleteItem.mutate(id);
    };

    const handleUpdate = (id) => {
        updateItem.mutate({ id, updatedItem: { quantity: newQuantity } });
        setEditItem(null);
    };

    const totalAmount = collection.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold text-center my-10">Cart Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    collection.map((item, idx) => (
                        <div key={idx} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="px-4 py-2">
                                <h1 className="text-xl font-bold text-blue-900 uppercase dark:text-white">{item.productName}</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Quantity: {item.quantity || 1}</p>
                                <button
                                    className="px-2 py-1 text-xs font-semibold text-red-600 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-red-200 focus:bg-red-400 focus:outline-none"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="px-2 py-1 ml-2 text-xs font-semibold text-blue-600 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-blue-200 focus:bg-blue-400 focus:outline-none"
                                    onClick={() => setEditItem(item._id)}
                                >
                                    Edit
                                </button>
                            </div>
                            {editItem === item._id && (
                                <div className="px-4 py-2">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-md p-1"
                                        value={newQuantity}
                                        onChange={(e) => setNewQuantity(e.target.value)}
                                    />
                                    <button
                                        className="px-2 py-1 ml-2 text-xs font-semibold text-green-600 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-green-200 focus:bg-green-400 focus:outline-none"
                                        onClick={() => handleUpdate(item._id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
                <Link to="/payment">
                    <button className="mt-5 px-6 py-3 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-700">
                        Confirm and Pay
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CartAdded;
