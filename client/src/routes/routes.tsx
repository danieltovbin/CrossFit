import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import PageNotFound from '../pages/404Page/PageNotFound';

export const router = createBrowserRouter([
    { path: "/", element: < HomePage />},
    { path: "/shop", element: < ShopPage/>},
    { path: "*", element: < PageNotFound/>},

])