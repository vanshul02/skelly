import React from 'react';

import Card from "../../shared/components/UIElements/Card/Card";
import './Cart.css';

const DUMMY_ITEMS = [{
    title: "T-Shirt Summer Vibes",
    prodid: "#261311",
    price: "$89.9",
    img: "https://images.pexels.com/photos/4550845/pexels-photo-4550845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
    title: `Basic Slim Fit T-Shirt`,
    prodid: "#212315",
    price: "$69.9",
    img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
];

const Cart = () => {
    return (
        DUMMY_ITEMS.map(product => {
            return <Card {...product} />
        })
    )
}

export default Cart
