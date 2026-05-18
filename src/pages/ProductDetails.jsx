// import { useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import '../styles/product.css'
import useProductDetails from '../hooks/useProductDetails';

function ProductDetails() {
    const { id } = useParams();
    const {products, error, loading} = useProductDetails();


    if(loading) return <p>loading...</p>

    if(error) return <p>has some issue will fix later</p>

    const selectedProduct = products.find(
        (product) => product.id === Number(id)
    )
    
  return (
    <>
    <Navbar/>
    <div className="productContainer">
        <div className="imageBox">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        <div className="detailsBox">
            <h1>Title : {selectedProduct.title}</h1>
            <p>Price : ${selectedProduct.price}</p>
            <p>Description : {selectedProduct.description}</p>
            <p>rating : {selectedProduct.rating.rate}</p>
            <div className="quantity flex gap-3 border-2 ">
                <div className="decrementBtn">
                    <button>-</button>
                </div>
                <div className="quantityDisplay">
                    <h1>1</h1>
                </div>
                <div className="incrementBox">
                    <button>+</button>
                </div>
            </div>
            <div className="addToCartBtn">
                <button >Add to cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails