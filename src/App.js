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

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books}/>} />
          <Route path="/books/:id" element={<BookInfo books={books} />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
