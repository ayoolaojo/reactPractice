import { useState } from "react"


const MyForm = () => {
       const [inputData,setInputData] = useState({
          fullName : '',
          email:'',
          password: '',
          phone: '',
          age : '',


       })

       const handleInput = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const {name, value} = e.target

          setInputData((prev)=>({
            ...prev ,
             [name] : value
          }))
       }

       const handleSubmit = (e:React.FormEvent)=> {
        e.preventDefault()
        console.log(inputData)

       }
  
  return (
    <div className="flex flex-col jutify-center align-center ">
           <h1>Registration Form</h1>
           <form  action="" onSubmit={handleSubmit}>
             <input type="text" placeholder="Full name" name="fullname" onChange={handleInput}/>  <br /> <br />
             <input type="email" placeholder="Email address" name="email" onChange={handleInput}/> <br /> <br />
             <input type="password" placeholder="Password" name="password" onChange={handleInput}/> <br /> <br />
             <input type="tel" placeholder="Phone Number" name="phone" onChange={handleInput} /> <br /> <br />
             <input type="number" placeholder="Age" name="age" onChange={handleInput} /> <br /> <br />
             <button type="submit">Register</button> <br /> <br />
           </form>
      
    </div>
  )
}

export default MyForm
