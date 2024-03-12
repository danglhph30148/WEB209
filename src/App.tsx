import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Productlist from './components/ProductList';
import Footer from './components/Footer';
import IProduct from './interface/Product';
function App() {
  const title:string = "Xin chào";
  const products:IProduct[]=[

    {
      "id":1,
      "name":"Đăng Pê trô li mếch",
      "image": "https://static.yeah1music.net/uploads/editors/33/2020/02/24/5e53520a4044a.jpg",
      "price":10000
    },
    {
      "id":1,
      "name":"Đăng Bi Em Đáp B's Liu",
      "image": "https://cf.shopee.vn/file/4a6746df8afd4a0f5a8182e46cc00485",
      "price":10000
    },
    {
      "id":1,
      "name":"Đăng Dầu Khí",
      "image": "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-rose-blackpink-cute-10.jpg",
      "price":10000
    },
    {
      "id":1,
      "name":"Đăng Đẹp Zaiiiii",
      "image": "https://hanoitop10.com/wp-content/uploads/2023/01/anh-rose-cuoi-dep_1.jpg",
      "price":10000
    },

  ]
  return (
    <>
      <Header title= {title}/>
      <Slider/>
      <Productlist products={products}/>
      <Footer/>
    </>
  );
}

export default App;