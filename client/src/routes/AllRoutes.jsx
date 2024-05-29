import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/home/Home";
import Destinations from "../pages/destinations/Destinations";
import About from "../pages/about/About";
import Destination from "../pages/destination/Destination";
import Hotel from "../pages/hotel/Hotel";

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
                        children: [
                            {
                                index: true,
                                element: <Destination />
                            },
                            {
                                path: ":slug",
                                element: <Hotel />
                            }
                        ]
                    }
                ]
            },
            {
                path: "hotels/:slug",
                element: <Hotel />
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
