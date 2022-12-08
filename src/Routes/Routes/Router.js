import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
        ]
    },
    { path: "/signin", element: <SignIn></SignIn> },
    { path: "/signup", element: <Signup></Signup> },
])
// WXOU2EZ17R3LDLFS
// WXOU2EZ17R3LDLFS
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=WXOU2EZ17R3LDLFS
export default router;