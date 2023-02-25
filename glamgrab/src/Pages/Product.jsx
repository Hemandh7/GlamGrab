import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/product.css";
import { useNavigate } from "react-router-dom";
import { Footer } from '../Components/Footer';

function ProductPage() {
const nav=useNavigate();
const [products, setProducts] = useState([]);
const [sortBy, setSortBy] = useState('asc'); // state variable to keep track of sort order
const [filterBy, setFilterBy] = useState({}); // state variable to keep track of filter options

useEffect(() => {
axios.get('https://63f5ae2dab76703b15af7a53.mockapi.io/products')
.then(res => setProducts(res.data))
.catch(err => console.log(err));
}, []);

const handleSort = () => {
if (sortBy === 'asc') {
setSortBy('desc');
setProducts(products.sort((a, b) => a.price - b.price));
} else {
setSortBy('asc');
setProducts(products.sort((a, b) => b.price - a.price));
}
}

const handleFilter = (event) => {
const { name, value } = event.target;
setFilterBy({...filterBy, [name]: value});
}

const filteredProducts = products.filter(product => {
if (filterBy.minPrice && product.price < filterBy.minPrice) {
return false;
}
if (filterBy.maxPrice && product.price > filterBy.maxPrice) {
return false;
}
if (filterBy.category && product.category !== filterBy.category) {
return false;
}
if (filterBy.brand && product.brand !== filterBy.brand) {
return false;
}
return true;
});

const handleProductClick = (product) => {
console.log(product);

nav(`/products/${product}`);
}
   console.log(filteredProducts);
  return (
    <div >
      <h2>Products</h2>
      <hr />
      <div className='products-wrapper'>
      <div>
        <label>Min Price:</label><br />
        <input type="number" name="minPrice" onChange={handleFilter} /><br />
        <label>Max Price:</label><br />
        <input type="number" name="maxPrice" onChange={handleFilter} /><br />
        <label>Category:</label><br />
        <select name="category" onChange={handleFilter}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select><br /><br /><br />
        <label>Brand:</label><br />
            <select name="brand" onChange={handleFilter}>
            <option value="">All</option>
            <option value="VERSACE">VERSACE</option>
            <option value="AMIRI">AMIRI</option>
            <option value="BALENCIAGA">BALENCIAGA</option>
            <option value="MARNI">MARNI</option>
            <option value="MONCLER">MONCLER</option>
            <option value="JACQUEMUS">JACQUEMUS</option>
            <option value="BALMAIN">BALMAIN</option>
            <option value="THOM BROWNE">THOM BROWNE</option>
            <option value="OFF-WHITE">OFF-WHITE</option>
            <option value="BALMAIN">PALM ANGELS</option>
            <option value="THOM BROWNE">THOM BROWNE</option>
            <option value="OFF-WHITE">OFF-WHITE</option>
            </select><br /><br />
        <button onClick={handleSort}>Sort by Price</button>
      </div>
      
      <div className='product-container'>
      {filteredProducts.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <div><img src={product.img} alt=""/></div>
          <div>
          <h4>{product.name}</h4>
          <h4 className='pro'>${product.price}</h4>
          </div>
          </div>
        
       ))}
      </div>
      </div>
      <Footer/>
      
    </div>
  );
}

export default ProductPage;
