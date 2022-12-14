import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Profile from "../../components/Profile/Profile";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import NotFoundRoute from "../NotFoundRoute/NotFoundRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => fetch('https://learn-easily-server.vercel.app/course')
            },
            {
                path: '/course/:id',
                loader: async ({ params }) => fetch(`https://learn-easily-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: 'course/:id/checkout',
                loader: async ({ params }) => fetch(`https://learn-easily-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFoundRoute></NotFoundRoute>
            }

        ]
    }
])