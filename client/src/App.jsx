import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home/Home';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import { Layout, RequireAuth } from './routes/layout/Layout';
import LoginPage from './routes/login/LoginPage';
import ProfilePage from './routes/profile/ProfilePage';
import Register from './routes/register/Register';
import ProfileUpdate from './routes/profileUpdate/ProfileUpdate';
import NewPostPage from './routes/newPostPage/NewPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/list", element: <ListPage />, loader: listPageLoader },
        { path: "/:id", element: <SinglePage />, loader: singlePageLoader },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage />, loader: profilePageLoader },
        { path: "/profile/update", element: <ProfileUpdate /> },
        { path: "/add", element: <NewPostPage /> }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App