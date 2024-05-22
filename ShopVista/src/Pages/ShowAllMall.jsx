import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ShowAllMall = () => {
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
            <div className="w-[1500px] m-auto  py-[100px] gap-y-40 grid grid-cols-3">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh3.googleusercontent.com/p/AF1QipPZRWReGcer-khJTYliVBIykRMOGS4SOPcq8cp7=s680-w680-h510" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sanmar Ocean city</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh5.googleusercontent.com/p/AF1QipOXb_xqI_c17Lb2gnkqtR2H4gG1EDJT4xDqtu9N=w480-h300-k-n-rw" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Finlay Square</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://www.marketbangladesh.com/media/com_jbusinessdirectory/pictures/companies/1537/afmi2-1619847075.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Afmi Plaza</h2>
                        <p>1/A Bayazid Bostami Road Beside MIMI SUPER MARKET(PROBORTOK MOR, 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh3.googleusercontent.com/p/AF1QipPZRWReGcer-khJTYliVBIykRMOGS4SOPcq8cp7=s680-w680-h510" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sanmar Ocean city</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh5.googleusercontent.com/p/AF1QipOXb_xqI_c17Lb2gnkqtR2H4gG1EDJT4xDqtu9N=w480-h300-k-n-rw" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Finlay Square</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://www.marketbangladesh.com/media/com_jbusinessdirectory/pictures/companies/1537/afmi2-1619847075.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Afmi Plaza</h2>
                        <p>1/A Bayazid Bostami Road Beside MIMI SUPER MARKET(PROBORTOK MOR, 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button>

                        </div>
                    </div>
                </div>









                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box  ">
                        <div className="ml-[55px] space-y-10">
                            <div>
                                <Link to='/shop'><button className="btn w-[350px] h-[60px] rounded-xl bg-blue-900 text-white hover:text-black">Ground Floor</button></Link>
                            </div>
                            <div>
                                <Link to='/category'><button className="btn w-[350px] h-[60px] rounded-xl bg-blue-900 text-white hover:text-black">First Floor</button></Link>
                            </div>
                            <div>
                                <Link to='/category'><button className="btn w-[350px] h-[60px] rounded-xl bg-blue-900 text-white hover:text-black">Second Floor</button></Link>
                            </div>
                            <div>
                                <Link to='/category'><button className="btn w-[350px] h-[60px] rounded-xl bg-blue-900 text-white hover:text-black">Third Floor</button></Link>
                            </div>
                            <div>
                                <Link to='/category'><button className="btn w-[350px] h-[60px] rounded-xl bg-blue-900 text-white hover:text-black">Four Floor</button></Link>
                            </div>                         </div>

                    </div>
                </dialog>


            </div>





        </div>
    );
};

export default ShowAllMall;