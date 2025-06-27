import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Cart, Products, Login, Checkout, HomeLayout, Landing, Orders, SingleProduct, Register, Error} from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:id",
                element: <SingleProduct />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
        ]
    },
    {
        path: "/auth/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/auth/register",
        element: <Register />,
        errorElement: <Error />,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}
export default App;
