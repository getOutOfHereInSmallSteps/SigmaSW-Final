import './styles/main.scss';

import AboutSection from './sections/About/AboutSection';
import Products from './sections/Products/Products';
import Offers from './sections/Offers/Offers';
import BannersSection from './sections/Banners/BannersSection';
import Nav from './components/Nav/Nav';
import HeroSection from './sections/Header/HeroSection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import FormPage from './pages/Form';
import SuccessMessagePage from './pages/SuccessMessage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'form',
        element: <FormPage />,
      },
      {
        path: 'form/success',
        element: <SuccessMessagePage />,
      },
    ],
  },
]);

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <HeroSection />
//       <BannersSection />
//       <AboutSection />
//       <Products />
//       <Offers />
//     </div>
//   );
// }
function App() {
  return <RouterProvider router={router} />;
}

export default App;
