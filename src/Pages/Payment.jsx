import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseCart from '../hooks/UseCart';
import Swal from 'sweetalert2';

const Payment = () => {
    const { collection } = UseCart();
    const navigate = useNavigate();
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');

    const totalAmount = collection.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleConfirmOrder = () => {
        if (!customerName || !phoneNumber || !location) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter your name, phone number, and location for delivery.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Handle the order confirmation process here
        Swal.fire({
            title: 'Order Confirmed!',
            text: `Your order has been placed and will be delivered to ${location} soon.`,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/'); // Redirect to home or another page after confirming the order
        });
    };

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl font-bold text-center my-10">Payment</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {collection.map((item, idx) => (
                    <div key={idx} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-blue-900 uppercase dark:text-white">{item.productName}</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Quantity: {item.quantity || 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center">
                <div className="mb-5">
                    <label className="block text-lg font-semibold mb-2" htmlFor="customerName">Customer Name</label>
                    <input
                        id="customerName"
                        type="text"
                        value={customerName}
                        onChange={handleInputChange(setCustomerName)}
                        placeholder="Enter your name"
                        className="w-full md:w-1/3 p-2 border rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-lg font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={handleInputChange(setPhoneNumber)}
                        placeholder="Enter your phone number"
                        className="w-full md:w-1/3 p-2 border rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-lg font-semibold mb-2" htmlFor="location">Delivery Location</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={handleInputChange(setLocation)}
                        placeholder="Enter your address"
                        className="w-full md:w-1/3 p-2 border rounded-md"
                    />
                </div>
                <h2 className="text-2xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
                <button
                    className="mt-5 px-6 py-3 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-700"
                    onClick={handleConfirmOrder}
                >
                    Confirm Cash on Delivery
                </button>
            </div>
        </div>
    );
};

export default Payment;
