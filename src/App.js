import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, 
  faShoppingCart, 
  faTimes, 
  faBolt, 
  faBookOpen, 
  faTags, 
  faStar, 
  faStarHalfAlt,
  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from "./data.js";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft);

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id);
    if (dupeItem) {
      setCart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        } else {
          return item
        }
      }));
    } else {
      setCart([...cart, {...book, quantity: 1}]);
    }
  }
  
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books}/>} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
