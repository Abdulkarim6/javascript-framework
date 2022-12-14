import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('https://javascript-server.vercel.app/details')
            },
            {
                path: '/category/:id', element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`https://javascript-server.vercel.app/category/${params.id}`)
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/faq', element: <Faq></Faq> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            {
                path: '/details/:id', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://javascript-server.vercel.app/details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <h1 className='text-2xl font-bold text-center'>Oops! Sorry, This page not found 404</h1>
        </div>
    }
])
