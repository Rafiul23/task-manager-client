import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from "./Components/Home/Home";
import AddTask from './Components/AddTask/AddTask';
import MyTasks from './Components/MyTasks/MyTasks';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/MyProfile/MyProfile";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/dashboard/myTasks',
                element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
            },
            {
                path: '/dashboard/userProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            }
        ]
    }
]);

export default router;