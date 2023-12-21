import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from "./Components/Home/Home";
import AddTask from './Components/AddTask/AddTask';
import MyTasks from './Components/MyTasks/MyTasks';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

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
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTasks',
                element: <MyTasks></MyTasks>
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
]);

export default router;