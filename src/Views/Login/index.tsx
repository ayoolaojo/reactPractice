

import Button from "../../Utils/Button"
import "./login.css"

const Login = () => {
  return (
    <section className="auth">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>

        <form>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <Button
            text="Login"
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

export default Login
