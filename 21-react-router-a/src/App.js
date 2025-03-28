import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import {createRoutesFromElements, Route,} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// https://example.com/products

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

// const router2 = createBrowserRouter(routeDefinitions);
// This commented part is an alternative way of defining Routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage />, },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
