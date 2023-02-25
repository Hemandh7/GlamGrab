import React from 'react'
import Home from '../Pages/Home'
import ProductPage from '../Pages/Product'
import { Route,Routes } from 'react-router-dom'
import SingleProduct from '../Pages/SingleProduct'
import Cart from '../Pages/Cart'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='products/:id' element={<SingleProduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  )
}

export default Allroutes
