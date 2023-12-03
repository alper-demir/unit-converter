import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Area from './components/Area';
import Currency from './components/Currency';
import Temperature from './components/Temperature';
import Volume from './components/Volume';
import Weight from './components/Weight';
import Length from './components/Lenght';
import Home from './components/Home';

export const routes = createBrowserRouter([
    {
        path: "", element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "/area", element: <Area /> },
            { path: "/currency", element: <Currency /> },
            { path: "/length", element: <Length /> },
            { path: "/temperature", element: <Temperature /> },
            { path: "/volume", element: <Volume /> },
            { path: "/weight", element: <Weight /> },
        ]
    }
])