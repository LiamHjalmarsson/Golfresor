import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

const routes = [
    {
        path: '/',
        element: <Root />,
        // children: [
        //     {
        //         index: true,
        //         element: <Home />
        //     },
        //     {
        //         path: "destinationer",
        //         children: [
        //             {
        //                 index: true,
        //                 element: <Destinations />,
        //             },
        //             {
        //                 path: ":slug",
        //                 children: [
        //                     {
        //                         index: true,
        //                         element: <Destination />,
        //                     },
        //                     {
        //                         path: ":slug",
        //                         element: <Hotel />
        //                     }
        //                 ]
        //             },

        //         ]

        //     },
        //     {
        //         path: "hotels/:slug",
        //         element: <Hotel />
        //     },
        //     {
        //         path: "omoss",
        //         element: <About />
        //     },
        // ],
    },
]

const AllRoutes = createBrowserRouter(routes);

export default AllRoutes;
