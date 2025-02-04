import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Index from './pages/Index'
import PageError from './pages/PageError'
import CountriesProvider from './context/CountriesProvider'
import {loader as detailsCountryLoader } from './pages/PageCountry'

const PageCountry = lazy(()=>import("./pages/PageCountry"))

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        index:true,
        element:<Index />,
        errorElement:<PageError />
      },
      {
        path:"countries/:nameCountry",
        element:<Suspense fallback={<p>Cargando....</p>}><PageCountry /></Suspense>,
        errorElement:<PageError />,
        loader:detailsCountryLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountriesProvider>
      <RouterProvider  router={router}/>
    </CountriesProvider>
  </React.StrictMode>,
)
