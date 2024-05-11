
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                loop={true}

                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" h-[500px]"
            >
                <SwiperSlide>


                    <img src="https://i.ibb.co/sbb2DP2/michael-weidemann-o-Gh-Tfu1-Ur-OY-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <img src="https://i.ibb.co/KjTWdhx/arturo-rey-5y-P83-Rha-FGA-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                            <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <img src="https://i.ibb.co/4KFgtv9/hanson-lu-sq5-P00-L7l-Xc-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>


                    <img src="https://i.ibb.co/dgKs3vV/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/D46cMxH/welovebarcelona-de-g-Oe4rb-B8-K6-U-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <img src="https://i.ibb.co/g6fSL61/freestocks-yq-BKa-F1-Kec-M-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <img src="https://i.ibb.co/JdMb46d/the-nix-company-4-Hmj9gky-M6c-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qnN9sn4/alexander-kovacs-53l-XBm-Tna-WA-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <img src="https://i.ibb.co/DgLszBC/highlight-id-ro-Hpo-Nu-ME1w-unsplash.jpg" className="w-full  " />
                    <div className="absolute   flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-20 w-1/2'>
                        <h2 className='text-6xl font-bold text-pink-100 '>Welcome to <span className='font-sedan'>ShopVista</span></h2>
                            <p>Your one-stop destination for all things stylish and convenient. Discover the latest trends, unique finds, and must-have essentials. From fashion to electronics, ShopVista has it all. Join us and shop smarter today!</p>

                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;