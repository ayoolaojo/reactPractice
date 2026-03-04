
import Alert from "../../Alert"
import HooksPractice from "../../Components/HooksPractice"
import "./home.css"

const Home = () => {
  return (

    <section className="home">
      <h1>Welcome to ReactPractice</h1>
      <p>Learn, build, and grow your React skills.</p>

      <Alert title="Dataslid">

        <p>Your home</p>

      </Alert>
      <HooksPractice/>
      
     
    </section>

     
  )
}

export default Home
