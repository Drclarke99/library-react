import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';
import Landing from './components/Landing';
import Highlights from './components/Highlights';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags);

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;
