import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
]

const AllRoutes = createBrowserRouter(routes);

export default AllRoutes;
