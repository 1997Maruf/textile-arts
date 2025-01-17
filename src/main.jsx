
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CardDitals from './component/CardDitals/CardDitals';
import Login from './component/Login/Login';
import RegisterPage from './component/Register Page/RegisterPage';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AddCraftItem from './component/AddCraftItem/AddCraftItem';
import AllArtcraftItems from './component/AllArtcraftItems/AllArtcraftItems';
import MyArtCraftList from './component/MyArtCraftList/MyArtCraftList';
import UpdatePage from './component/UpdatePage/UpdatePage';
import CategoriesCard from './component/CategoriesCard/CategoriesCard';
import Eror from './Eror/Eror';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://b9a10-server-side-1997-maruf.vercel.app/craft')
      },
      {
        path:'/card/:id',
        element: <PrivateRoute> <CardDitals></CardDitals> </PrivateRoute>,
        loader: ({params})=> fetch(`https://b9a10-server-side-1997-maruf.vercel.app/craft/${params.id}`)
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/addcraft',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: '/allcard',
        element: <AllArtcraftItems></AllArtcraftItems>,
        loader: ()=> fetch('https://b9a10-server-side-1997-maruf.vercel.app/craft')
      },
      {
        path: '/mycard',
        element: <PrivateRoute><MyArtCraftList></MyArtCraftList></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({params})=> fetch(`https://b9a10-server-side-1997-maruf.vercel.app/craft/${params.id}`)
      },
      {
        path: '/embroidery',
        element:<CategoriesCard></CategoriesCard>,
        loader: ()=> fetch('https://b9a10-server-side-1997-maruf.vercel.app/embroidery')
      }

     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
   <HelmetProvider>
   <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
   </HelmetProvider>
 </React.StrictMode>
  
  
)
