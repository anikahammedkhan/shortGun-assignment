import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <PrivateRoute><Home /> </PrivateRoute> },
        ]
    },
    { path: "/signin", element: <SignIn></SignIn> },
    { path: "/signup", element: <Signup></Signup> },
]);
export default router;