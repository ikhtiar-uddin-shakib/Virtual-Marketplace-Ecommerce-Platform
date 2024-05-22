import { useEffect, useState } from "react";
import Shop_card from "../Components/card/Shop_card";

const Shop = () => {
    const[shop_List, setShop_List] = useState([])
    useEffect(() =>{
        fetch('shop.json')
        .then(res => res.json())
        .then(data =>setShop_List(data))
    },[])

    return (
        <div>
            <h2>nahid</h2>
            {
                shop_List.map(shop_card => <Shop_card
                shop_card={shop_card}
                key={shop_List.id}
                >
                    
                </Shop_card>)
            }
            
        </div>
    );
};

export default Shop;