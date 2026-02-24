import { Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout"
import App from "../App"
import Home from "../Views/Home"
import About from "../Views/About"
import Products from "../Views/Products"
import Contact from "../Views/Contact"
import Login from "../Views/Login"
import Registration from "../Views/Registration"


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element ={<Layout/>}>
          <Route path="/" element = {<App/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/registration" element = {<Registration/>}/>

        </Route>
      
    </Routes>
  )
}

export default AppRouter
