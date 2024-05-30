

const Testimonial = () => {
    return (
        <div className="bg-blue-50 my-20 py-10 px-5">
            <h1 className="text-4xl text-center text-blue-900 font-sedan font-bold">TESTIMONIAL</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10">

                <div className="w-full max-w-md px-8 py-4 mt-16 bg-pink-50 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">

                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="" />

                    </div>

                    {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"></h2> */}

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">ShopVista made my shopping experience seamless and enjoyable. The variety of products and easy navigation kept me coming back for more!</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link"> Sarah W</a>
                    </div>
                </div>


                <div className="w-full max-w-md px-8 py-4 mt-16 bg-pink-50 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">

                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="" />

                    </div>

                    {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"></h2> */}

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Finding quality items at great prices has never been easier. ShopVista delivers on its promise of convenience and value every time!</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">John Doe</a>
                    </div>
                </div>


                <div className="w-full max-w-md px-8 py-4 mt-16 bg-pink-50 rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">

                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="" />

                    </div>

                    {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"></h2> */}

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">I love how ShopVista offers a wide range of products to suit every need. The fast shipping and excellent customer service are just the cherry on top!</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Emily M</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;