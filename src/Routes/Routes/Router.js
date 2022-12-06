import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import SignIn from "../../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <SignIn></SignIn> }
        ]
    },
])
// WXOU2EZ17R3LDLFS
export default router;