import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import DashBoard from "../../Pages/Dashboard/Dashboard/DashBoard";
import ManageDoctors from "../../Pages/Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element: <ManageDoctors></ManageDoctors>
            }
        ]
    }
])
export default router