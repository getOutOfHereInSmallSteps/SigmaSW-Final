import './App.css';
import './styles/main.scss';

import Header from './sections/Header/Header';
import BannerContainer from './sections/Banners/BannerContainer';
import About from './sections/About/About';
import Products from './sections/Products/Products';
import Offers from './sections/Offers/Offers';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerContainer />
      <About />
      <Products />
      <Offers />
    </div>
  );
}

export default App;
