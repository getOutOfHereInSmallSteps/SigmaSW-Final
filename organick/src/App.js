import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import FormPage from './pages/Form';
import SuccessMessagePage from './pages/SuccessMessage';
import NotFoundPage from './pages/NotFoundPage';

import useHttp from './hooks/use-http';

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

function App() {
  useHttp();

  return <RouterProvider router={router} />;
}

export default App;
