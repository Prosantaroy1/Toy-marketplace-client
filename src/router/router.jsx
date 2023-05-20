import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blogs/Blog";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

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