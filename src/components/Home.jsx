import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/1");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();
  }, []); // Empty dependency array means useEffect will run once after the initial render

  return (
    <div className="container">
      {products.map((product) => (
        <div className="card_item" key={product.id}>
          <div className="card_inner">
            <img src={product.thumbnail} alt="" />
            <div className="productName">{product.title}</div>
            <div className="productPrice">${product.price}</div>
            <div className="productQuantity">Quantity: {product.quantity}</div>
            {/* Add other product details as needed */}
            <button className="seeMore">See More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
