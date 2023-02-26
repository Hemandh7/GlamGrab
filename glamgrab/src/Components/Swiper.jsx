import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect } from "react";
import "../Styles/swiper.css"
import axios from "axios";
import "swiper/css";
import { useNavigate } from "react-router-dom";


export default () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .get("https://63f5ae2dab76703b15af7a53.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swipe"
    >
      {products.map((product, index) => (
        <SwiperSlide>
          <div
            className="sproduct-card"
            key={product.id}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              className="pimg"
            />
            <div className="sproducts-info">
              <div className="sproducts-name">{product.brand}</div>
              <div className="sproducts-name">{product.name}</div>
              <div className="sproducts-price">₹{product.price}</div>
              
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};