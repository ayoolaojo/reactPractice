import { Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout"
import Home from "../Views/Home"
import About from "../Views/About"
import Products from "../Views/Products"
import Contact from "../Views/Contact"
import Login from "../Views/Login"

import Register from "../Views/Registration"


const AppRouter = () => {
  return (
    <Routes>
        <Route  element ={<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path="home" element = {<Home/>}/>
          <Route path="about" element = {<About/>}/>
          <Route path="products" element = {<Products/>}/>
          <Route path="contact" element = {<Contact/>}/>
         
        </Route>

        <Route  element = {<Layout showFooter = {false} showNavbar = {false}/>}>
           <Route path="login" element = {<Login/>}/>
          <Route path="register" element = {<Register/>}/>

        </Route>
      
    </Routes>
  )
}

export default AppRouter
