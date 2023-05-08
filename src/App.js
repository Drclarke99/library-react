import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt);

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
