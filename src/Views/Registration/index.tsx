

import Button from "../../utils/Button"
import "./register.css"


const Register = () => {
  return (
    <section className="auth">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join us and start building with React</p>

        <form>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />

          <Button
            text="Register"
            bg="blueviolet"
            color="white"
            isCurved
            wt={100}
            ht={45}
          />
        </form>
      </div>
    </section>
  )
}

export default Register
