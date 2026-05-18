import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./layouts/RootLayout";


const routes = [
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];


export default routes;