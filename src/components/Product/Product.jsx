import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {img, name, seller, ratings, price} = props.product
    return (
        <div className='product'>
             <img src={img} alt="" /> 
            <div className="product-info">
               <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufactarur: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className="btn-cart">
                Add To Card
            </button>
        </div>
    );
};

export default Product;