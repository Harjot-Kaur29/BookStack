import App from '../App';
import Home from '../components/Home';
import Shop from '../components/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../components/SingleBook';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoardLayout from '../components/DashBoardLayout';
import Dashboard from '../components/Dashboard';
import Upload from '../components/Upload';
import ManageBook from '../components/ManageBook';
import EditBook from '../components/EditBook';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../components/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
    ]
  },
  {
    path: "sign-up",
    element: <SignUp />
  },
  {
    path:"login",
    element: <Login/>
  },
  {
  path: "logout",
  element:<Logout/>
  }

]);

export default router;
