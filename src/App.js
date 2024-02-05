import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element={<ShopCategory category="men" />} />
      <Route path='/womens' element={<ShopCategory category="women" /> } />
      <Route path='/kids' element={<ShopCategory category="kid" />}/>
      <Route path='/product' element={<Product />}>
        <Route path=':productId' element={<Product />} />
      </Route>
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
