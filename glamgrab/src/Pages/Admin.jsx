import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://63f5ae2dab76703b15af7a53.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://63c6d562d307b76967421abd.mockapi.io/Login');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
    fetchUsers();
  }, []);

  const [productFormData, setProductFormData] = useState({
    name: '',
    image: '',
    price: '',
    category: '',
    description: ''
  });

  const handleProductFormChange = event => {
    setProductFormData({
      ...productFormData,
      [event.target.name]: event.target.value
    });
  }

  const handleProductCreate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://63f5ae2dab76703b15af7a53.mockapi.io/products', productFormData);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProductData, setEditingProductData] = useState({});

  const handleProductEditClick = productId => {
    setEditingProductId(productId);
    setEditingProductData(products.find(product => product.id === productId));
  }

  const handleProductUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://63f5ae2dab76703b15af7a53.mockapi.io/products/${editingProductId}`, editingProductData);
      setProducts(products.map(product => product.id === editingProductId ? response.data : product));
      setEditingProductId(null);
      setEditingProductData({});
    } catch (error) {
      console.error(error);
    }
  }

  const handleProductDelete = async (id) => {
    try {
      await axios.delete(`https://63f5ae2dab76703b15af7a53.mockapi.io/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
     } catch (error) {
        console.log(error);
      }
    }
  
    const [userFormData, setUserFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleUserFormChange = event => {
      setUserFormData({
        ...userFormData,
        [event.target.name]: event.target.value
      });
    }
  
    const handleUserCreate = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('https://63c6d562d307b76967421abd.mockapi.io/Login', userFormData);
        setUsers([...users, response.data]);
      } catch (error) {
        console.error(error);
      }
    }
  
    const [editingUserId, setEditingUserId] = useState(null);
    const [editingUserData, setEditingUserData] = useState({});
  
    const handleUserEditClick = userId => {
      setEditingUserId(userId);
      setEditingUserData(users.find(user => user.id === userId));
    }
  
    const handleUserUpdate = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.put(`https://63c6d562d307b76967421abd.mockapi.io/Login/${editingUserId}`, editingUserData);
        setUsers(users.map(user => user.id === editingUserId ? response.data : user));
        setEditingUserId(null);
        setEditingUserData({});
      } catch (error) {
        console.error(error);
      }
    }
  
    const handleUserDelete = async (id) => {
      try {
        await axios.delete(`https://63c6d562d307b76967421abd.mockapi.io/Login/${id}`);
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div className="admin-container">
        <div>
        <h1>Product List</h1>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td><img src={product.img} alt="" /></td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleProductEditClick(product.id)}>Edit</button>
                <button onClick={() => handleProductDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    <div>
      <h1>Product Form</h1>
      <form onSubmit={handleProductCreate}>
        <input type="text" placeholder="Name" name="name" onChange={handleProductFormChange} value={productFormData.name} />
        <input type="text" placeholder="Image" name="image" onChange={handleProductFormChange} value={productFormData.image} />
        <input type="text" placeholder="Price" name="price" onChange={handleProductFormChange} value={productFormData.price} />
        <input type="text" placeholder="Category" name="category" onChange={handleProductFormChange} value={productFormData.category} />
        <input type="text" placeholder="Description" name="description" onChange={handleProductFormChange} value={productFormData.description} />
        <button type="submit">Create Product</button>
      </form>
      {editingProductId && (
        <form onSubmit={handleProductUpdate}>
          <input type="text" placeholder="Name" name="name" onChange={handleProductFormChange} value={editingProductData.name} />
          <input type="text" placeholder="Image" name="image" onChange={handleProductFormChange} value={editingProductData.image} />
          <input type="text" placeholder="Price" name="price" onChange={handleProductFormChange} value={editingProductData.price} />
          <input type="text" placeholder="Category" name="category" onChange={handleProductFormChange} value={editingProductData.category} />
          <input type="text" placeholder="Description" name="description" onChange={handleProductFormChange} value={editingProductData.description} />
          <button type="submit">Update Product</button>
        </form>
      )}
      </div>
      <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleUserEditClick(user.id)}>Edit</button>
                <button onClick={() => handleUserDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
      <h1>User Form</h1>
      <form onSubmit={handleUserCreate}>
        <input type="text" placeholder="Name" name="name" onChange={handleUserFormChange} value={userFormData.name} />
        <input type="text" placeholder="Email" name="email" onChange={handleUserFormChange} value={userFormData.email} />
        <input type="text" placeholder="Password" name="password" onChange={handleUserFormChange} value={userFormData.password} />
        <button type="submit">Create User</button>
      </form>
      {editingUserId && (
        <form onSubmit={handleUserUpdate}>
          <input type="text" placeholder="Name" name="name" onChange={handleUserFormChange} value={editingUserData.name} />
          <input type="text" placeholder="Email" name="email" onChange={handleUserFormChange} value={editingUserData.email} />
          <input type="text" placeholder="Password" name="password" onChange={handleUserFormChange} value={editingUserData.password} />
          <button type="submit">Update User</button>
        </form>
           )}
           </div>
           </div>
         );
       }
       
       export default Admin;
       
       

       