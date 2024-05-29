import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

const routes = [
    {
        path: '/',
        element: <Root />,
    },
]

const AllRoutes = createBrowserRouter(routes);

export default AllRoutes;
