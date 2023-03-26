import './styles/main.scss';

import Header from './sections/Header/Header';
import AboutSection from './sections/About/AboutSection';
import Products from './sections/Products/Products';
import Offers from './sections/Offers/Offers';
import BannersSection from './sections/Banners/BannersSection';

function App() {
  return (
    <div className="App">
      <Header />
      <BannersSection />
      <AboutSection />
      <Products />
      <Offers />
    </div>
  );
}

export default App;
