import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Destinations from "../pages/destinations/Destinations";
import About from "../pages/about/About";

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "destinationer",
                element: <Destinations />
            },
            {
                path: "omoss",
                element: <About />
            }
        ]
    },
]

const AllRoutes = createBrowserRouter(routes);

export default AllRoutes;
