// import { useState } from 'react'
import { useParams, useOutletContext } from "react-router";
import { useState } from "react";
import "../styles/product.css";
import useProductDetails from "../hooks/useProductDetails";


function ProductDetails() {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const { products, error, loading } = useProductDetails();
  const {setCartItems} = useOutletContext()

  const incrementClick = () => {
    setCount((prev) => prev + 1);
  };
  const decrementClick = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setCount(count);
    }
  };

  if (loading) return <p>loading...</p>;

  if (error) return <p>has some issue will fix later</p>;

  const selectedProduct = products.find((product) => product.id === Number(id));

 const addToCart = () => {

    if(count === 0) return;

    const cartProduct = {

        id: selectedProduct.id,

        title: selectedProduct.title,

        price: selectedProduct.price,

        image: selectedProduct.image,

        quantity: count
    };

    setCartItems((prevItems) => {

        const existingItem = prevItems.find(
            (item) => item.id === selectedProduct.id
        );

        if(existingItem){

            return prevItems.map((item) =>

                item.id === selectedProduct.id

                    ? {
                        ...item,
                        quantity: item.quantity + count
                    }

                    : item
            );
        }

        return [...prevItems, cartProduct];
    });
};

  return (
    <>
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
              <button onClick={decrementClick}>-</button>
            </div>
            <div className="quantityDisplay">
              <h1>{count}</h1>
            </div>
            <div className="incrementBox">
              <button onClick={incrementClick}>+</button>
            </div>
          </div>
          <div className="addToCartBtn">
            {count > 0 && <button onClick={addToCart}>Add To Cart</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
