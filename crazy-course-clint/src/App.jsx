import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './Components/Routes/Routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
