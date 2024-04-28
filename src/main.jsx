
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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/card/:id',
        element: <PrivateRoute> <CardDitals></CardDitals> </PrivateRoute>,
        loader: () => fetch('../json.json')
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
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: '/allcard',
        element: <AllArtcraftItems></AllArtcraftItems>
      },
      {
        path: '/mycard',
        element: <MyArtCraftList></MyArtCraftList>
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
