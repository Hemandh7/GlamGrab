import React, { useState } from 'react';
import "../Styles/checkout.css";
import { Footer } from '../Components/Footer';
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUPIDetails, setShowUPIDetails] = useState(false);
  const [number,setNumber]=useState('');
  const nav=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional logic to handle order submission, etc.
    alert("Order Placed")
    nav('/')
    console.log(name,number, email, address, paymentMethod);
  }

  return (
    <>
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input 
            type="text" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Mobile: 
          <input 
            type="number" 
            name="name"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label>
          Email: 
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Shipping Address: 
          <input 
            type="text" 
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Payment Method: 
          <select 
            name="payment-method"
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              if (e.target.value === 'credit-card') {
                setShowCardDetails(true);
                setShowUPIDetails(false);
              } else if (e.target.value === 'upi') {
                setShowUPIDetails(true);
                setShowCardDetails(false);
              } else {
                setShowUPIDetails(false);
                setShowCardDetails(false);
              }
            }}
          >
            
            <option value="credit-card">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="bank-transfer">Cash on Delivery</option>
          </select>
        </label>
        {showCardDetails && (
          <div>
            <label>
              Card Number:
              <input type="text" name="card-number" />
            </label>
            <label>
              Expiration Date:
              <input type="text" name="expiration-date" placeholder="MM/YY" />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" />
            </label>
          </div>
        )}
        {showUPIDetails && (
          <div>
            <label>UPI ID:
<input type="text" name="upi-id" />
</label>
</div>
)}
<input type="submit" value="Place Order"/>
</form>

</div>
<Footer/>
</>
);
}

export default CheckoutPage;





             
