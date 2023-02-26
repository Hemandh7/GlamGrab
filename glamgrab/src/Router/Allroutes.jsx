import React from 'react'
import Home from '../Pages/Home'
import ProductPage from '../Pages/Product'
import { Route,Routes } from 'react-router-dom'
import SingleProduct from '../Pages/SingleProduct'
import Cart from '../Pages/Cart'
import CheckoutPage from '../Pages/Checkout'
import Admin from '../Pages/Admin'
import LoginSignup from '../Pages/Login'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='products/:id' element={<SingleProduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login/admin' element={<Admin/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
      <Route path='/checkout' element={<CheckoutPage/>}></Route>
    </Routes>
  )
}

export default Allroutes
