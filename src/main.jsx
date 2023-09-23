import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Context.jsx'
import User from './component/User/User.jsx';
import UserDetails from './component/UserDetails/UserDetails.jsx';
import NotFound from './component/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>,
    children:[
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      
      {
        path:'/user',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User/>
      },
      {
        path:'/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
