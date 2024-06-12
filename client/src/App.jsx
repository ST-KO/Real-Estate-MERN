import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home/Home';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import Layout from './routes/layout/Layout';
import LoginPage from './routes/login/LoginPage';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/login", element: <LoginPage /> },
      ]
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App