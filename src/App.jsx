import './App.css'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/feachers/privateRoutes'
import Pagenotfound from './pages/pagenotfound/Pagenotfound'
import Home from "./pages/home/Home"
import PublicRoutes from './components/feachers/publicRoutes'
import Login from "./pages/login/Login"
import About from './pages/About/About'
import Checkout from './pages/checkout/Checkout'
import Contactus from './pages/contactus/Contactus'
function App() {

  return (
    <>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path='/home' />
        <Route element={<About />} path='/about' />
        <Route element={<Contactus />} path='/contact' />
        <Route element={<Checkout />} path='/checkout' />
        <Route element={<Pagenotfound />} path='*' />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<Login />} path='/' />
      </Route>
    </Routes>

    {/* <Login /> */}
    </>
  )
}

export default App
