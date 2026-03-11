import { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const {name, value} = e.target
    setFormData({
        ...formData, [name]:value
    })

  }
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault()

     console.log (formData)

  }
  return (
    <div className=" h-screen w-screen flex flex-col justify-center align-center ">
      <h1>My Form</h1>
      <p>
        Ensure to fill the form below accordingly to have access to grant of $5m
      </p>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
        />
        
        <br /> <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />  <br /> <br />

        <input
         type="text"
         placeholder="Email"
         name="email"
         onChange={handleChange}
          /> <br /> <br />

          <input 
          type="text" 
          placeholder="password"
          name="password"
          onChange={handleChange}
          />

        <br /> <br />
        <input
          type="number"
          placeholder="Age :"
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default MyForm;
