import React, { useState, useEffect } from "react";
import "../Styles/singleproduct.css";
import { useParams } from "react-router-dom";
import { Footer } from "../Components/Footer";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id, "dfdfffd");

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://63f5ae2dab76703b15af7a53.mockapi.io/products/${id}`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    product["quantity"] = 1;
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    alert("Item added to cart");
  };

  return (
    <>
      <div className="product-container1">
        <div>
          <img className="product-image" src={product.img} alt={product.name} />
        </div>
        <div>
          <p className="product-name">{product.name}</p>
          <div className="prod-price">
            <p>Price:</p>
            <p className="product-price">${product.price}</p>
          </div>
          colors:
          <div className="colors">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="size">
            <h5>Size</h5>
            <button>L</button>
            <button>M</button>
            <button>S</button>
            <button>XL</button>
          </div>
          <br />
          <button className="atc" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
        </div>
        <div>
          <h4>Product Description</h4>
          <p className="product-description">{product.description}</p>
        </div>
        <div></div>
        <div>
          <br /> Models shown are 5'9" to 5'11" tall, wearing size S/4 or L/12.
          <br />
          i45 792 2068
          <br />
          <br />
          <b>
            <u> FEATURES</u>
          </b>
          <br />
          <br />
          Average length, Small: Reg 26" Classic; A universal fit. Not too slim,
          not too relaxed on body.
          <br />{" "}
          <b>
            <u> CARE</u>
          </b>
          <br />
          <br />
          Machine wash cold with like colors. Only non-chlorine bleach when
          needed. Tumble dry low. Remove promptly. Warm iron as desired.
          <br />{" "}
          <b>
            <u> MATERIALS</u>
          </b>
          <br />
          <br />
          59% cotton/39% polyester/2% spandex Imported
        </div>
      </div>
      <div className="also">
        <h2>Wear it With</h2>
      </div>
      <div>
        <h2>You May Also Like</h2>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
