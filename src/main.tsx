import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Items from './comp/Items/Items.tsx'
import BuyPage from './comp/BuyPage/BuyPage.tsx'
import Thanks from './comp/ThanksPage/ThanksPage.tsx'
import Login from './comp/LoginPage/Login.tsx'
const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:'/',
                element:<Items/>
            },
            {
                path:'/item/:id',
                element:<BuyPage/>
            },
            {
                path:'/thanks/',
                element:<Thanks/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
