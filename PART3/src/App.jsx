import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Products from './components/Products.jsx'
import Phone from './components/Phone.jsx'
import Laptop from './components/Laptop.jsx'


const App = () => {

  function NotFound(){
    return <h2>404 - Page Not Found</h2>
  }

  return (
    <BrowserRouter>
    <h1>React Router Example : </h1>

      {/* <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a> */}
     
     <nav>
      <Link to='/'>Home</Link> |
      <Link to='/about'>About</Link> |
      <Link to='/contact'>Contact</Link> |
      <Link to='/user/10'>User</Link> |
      <Link to='/products'>Products</Link>
     </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/products' element={<Products />} >
           <Route path='phone' element={<Phone />} />
           <Route path='laptop' element={<Laptop />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
