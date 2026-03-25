import { useState } from "react"


const MyNewForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email:  '',
        Phone: '',
        location: '',




    })
  return (
    <form className="h-[50vh] w-full bg-blue-700 flex flex-col justify-center items-center">
         <input type="text" placeholder="fullName" /> <br /> <br />
         <input type="text" placeholder="email" />  <br /> <br />
         <input type="text" placeholder="Phone" />  <br /> <br />
         <input type="text" placeholder="Location" /> <br /> <br />
         <button type="submit"></button>
    </form>
  )
}

export default MyNewForm
