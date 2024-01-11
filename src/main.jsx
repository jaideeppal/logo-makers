import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import Layout from "./Layout.jsx"
import About from './component/About/about.jsx'
import Contact from './component/Contact/contact.jsx'
import User from './component/User/user.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'

// ya toh ya kar lo
// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element :<Home/>
//       },
//       {

//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
// ya ye method use kar lo
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route  loader={githubInfoLoader}

    
    path='github' element={<Github />}/>
    </Route >
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
