import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">ReactPractice</h2>

        <p className="footer-text">
          Building beautiful React interfaces with simplicity and elegance.
        </p>

        <div className="footer-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} ReactPractice. All rights reserved.
        </p>
      </div>
      
    </footer>
  )
}

export default Footer