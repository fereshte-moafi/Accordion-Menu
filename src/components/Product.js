import React , { useState } from 'react';
import '../styles/product.css';
import { FaRegHeart } from "react-icons/fa";



const Product =(props)=> {

        const{img,title,price,children}=props;

        const [btnClass, setBtnClass] = useState('heart');

        const toggleColor = () => {
       

            if (btnClass === 'heart') {
                setBtnClass('heart2');
            } else {
                setBtnClass('heart');
            }
          }


        return (
            <div className="product-box">
                <img src={img} alt={title} className='img' />
                <h1>{title}</h1>
                <h2>{price}</h2>
                <p>{children}</p>
                <FaRegHeart className={`${btnClass}`} onClick={toggleColor}/> 
            </div>
        );
    }


export default Product;