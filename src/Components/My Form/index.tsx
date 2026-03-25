import { useState } from "react"


const MyForm = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email : '',
    password : '',
    phone: '',
    age : ''

  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
     const {name,value} = e.target
    //  setFormData({
    //   ...formData ,
    //   [name]: value,
    //  })
    setFormData(prev=>({
      ...prev , 
      [name] :value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    console.log(formData)
  }
       
  
  return (
    <div className="flex flex-col justify-center items-center ">
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
