import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Destinations from "../pages/destinations/Destinations";
import About from "../pages/about/About";
import path from "path";
import Destination from "../pages/destination/Destination";

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
                children: [
                    {
                        index: true,
                        element: <Destinations />
                    },
                    {
                        path: ":slug",
                        element: <Destination />
                    }
                ]
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
