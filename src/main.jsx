import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import {store} from './features/store.jsx'
import { Provider } from 'react-redux';

const router=createBrowserRouter([
  {
    path:'/',element:<App/>,
    children:[
      {
        path:'cart',element:<CartPage/>
      }
      ,{
        path:'/',element:<HomePage/>
      }
      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App  />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
