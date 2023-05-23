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
import AllDetailsBtn from "../page/AllDetailsBtn/AllDetailsBtn";

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
            element: <AllToys/>,
            loader: ({params})=> fetch(`http://localhost:5000/product`)
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
        },
        {
            path: 'detalisBtn/:id',
            element: <AllDetailsBtn/>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            
        }
      ]
    },
  ]);
  export default router;