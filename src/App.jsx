import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Home from './assets/pages/home/Home';
import Report from './assets/pages/report/Report';
import Layout from './assets/root/Layout';
let multipage = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/report' element={<Report/>}></Route>
  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
