import { Link } from "react-router-dom";

const ShoppingCard = () => {
    return (
        <div>
            <h1 className="mt-[100px] text-4xl text-center  text-blue-900 font-sedan font-bold">Our services</h1>

            <div className="w-[1500px] m-auto space-x-44 py-[100px] flex">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh3.googleusercontent.com/p/AF1QipPZRWReGcer-khJTYliVBIykRMOGS4SOPcq8cp7=s680-w680-h510" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sanmar Ocean city</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <Link to='/category'><button className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button></Link>

                        </div>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://lh5.googleusercontent.com/p/AF1QipOXb_xqI_c17Lb2gnkqtR2H4gG1EDJT4xDqtu9N=w480-h300-k-n-rw" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Finlay Square</h2>
                        <p>997 CDA Ave, Chattogram 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <Link to='/category'><button className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button></Link>

                        </div>
                    </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[450px]" src="https://www.marketbangladesh.com/media/com_jbusinessdirectory/pictures/companies/1537/afmi2-1619847075.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Afmi Plaza</h2>
                        <p>1/A Bayazid Bostami Road Beside MIMI SUPER MARKET(PROBORTOK MOR, 4000</p>
                        <div className="card-actions justify-center mt-[20px]">
                            <Link to='/category'><button className="btn w-[250px] rounded-3xl bg-blue-900 text-white hover:text-black">Go</button></Link>

                        </div>
                    </div>
                </div>





            </div>


            <div className="flex justify-center">
                <Link to='/AllMall'><button className="btn mx-auto bg-blue-900 text-white hover:text-black w-[120px] "  >Visit All</button></Link>

            </div>



        </div>
    );
};

export default ShoppingCard;