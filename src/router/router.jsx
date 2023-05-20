import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blogs/Blog";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import PrivateRouter from "./PrivateRouter";
import AllToys from "../page/AllToys Section/AllToys";
import AddToys from "../AddToy Section/AddToys";
import MyToys from "../page/MyToy Section/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'alltoys',
            element: <AllToys/>
        },
        {
            path: 'addToy',
            element: <PrivateRouter><AddToys/></PrivateRouter>
        },
        {
            path: 'mytoys',
            element:<PrivateRouter><MyToys/></PrivateRouter>
        },
        {
            path: 'blog',
            element: <Blog/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: '/signin',
            element: <Register/>
        }
      ]
    },
  ]);
  export default router;