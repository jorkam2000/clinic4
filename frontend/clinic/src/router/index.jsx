import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/mainLayout";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
])

export default router