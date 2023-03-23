import './App.css';
import './styles/main.scss';

import Header from './sections/Header/Header';
import BannerContainer from './sections/Banners/BannerContainer';
import About from './sections/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerContainer />
      <About />
    </div>
  );
}

export default App;
