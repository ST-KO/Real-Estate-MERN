import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home/Home';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import { Layout, RequireAuth } from './routes/layout/Layout';
import LoginPage from './routes/login/LoginPage';
import ProfilePage from './routes/profile/ProfilePage';
import Register from './routes/register/Register';
import ProfileUpdate from './routes/profileUpdate/ProfileUpdate';

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
        { path: "/register", element: <Register /> },
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdate /> },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App