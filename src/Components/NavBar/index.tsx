import { Link } from "react-router-dom"

import'./navbar.css'
import Button from "../../utils/Button"



const NavBar = () => {
  return (
    <nav>
           <h1>myReactPlayground</h1>
             
        <ul>
            <li><Link to='/home'>Home </Link></li>
            <li><Link to='/about'>About </Link></li>
            <li><Link to='/products'>Products </Link></li>
            <li><Link to='/contact'>Contact </Link></li>

            
            
        </ul>

      <Button text = 'Login ' color="purpleblue"
      />
      <Button text = 'Register' isCurved/>
      
    </nav>
  )
}

export default NavBar
