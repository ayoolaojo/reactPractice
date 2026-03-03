import { Link } from "react-router-dom"
import "./navbar.css"
import Button from "../../utils/Button"

const NavBar = () => {
  return (
    <nav>
      <h1>myReactPlayground</h1>

      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Login */}
      <Link to="/login">
        <Button text="Login" isCurved />
      </Link>

      {/* Register */}
      <Link to="/register">
        <Button
          text="Register"
          isCurved
          color="purple"
        />
      </Link>
    </nav>
  )
}

export default NavBar
