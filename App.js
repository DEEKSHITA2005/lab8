import './App.css';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="products" element= {<Products/>}>
      <Route index element={<NewProducts/>}/>
        <Route path="Featured Products" element={<FeaturedProducts/>}/>
        <Route path="New Products" element={<NewProducts/>}/>
      </Route>
    </Routes>
      
  );
}

export default App;