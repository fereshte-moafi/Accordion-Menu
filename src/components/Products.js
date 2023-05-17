import React, { useState } from 'react';
import Product from './Product';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import '../styles/products.css';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'



const Products = () => {

    // State to show/hide accordion
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(!show); // Toggle accordion

        if (acoClass === 'accordian-header') {
            setAcoClass('accordian-header2');
        } else {
            setAcoClass('accordian-header');
        }

    };

    const [acoClass, setAcoClass] = useState('accordian-header2');

    return (
        <div className="container">
            <div className="accordian">

                <div className={`${acoClass}`} onClick={handleOpen}>
                    <div>Digital Products</div>
                    <div className="sign">{show ? <AiOutlineUp /> : <AiOutlineDown />}</div>
                </div>
                {show && (

                    <div className="accordian-body">
                        <div className="products">
                            <Product img={img1} title="Product_1" price="200$">Lorem Ipsum is simply dummy text of the printing and type setting industry.</Product>
                        </div>

                        <div className="products">
                            <Product img={img2} title="Product_2" price="350$">Lorem Ipsum is simply dummy text of the printing and type setting industry.</Product>
                        </div>

                        <div className="products">
                            <Product img={img3} title="Product_3" price="410$">Lorem Ipsum is simply dummy text of the printing and type setting industry.</Product>
                        </div>

                        <div className="products">
                            <Product img={img4} title="Product_4" price="560$">Lorem Ipsum is simply dummy text of the printing and type setting industry.</Product>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}


export default Products;