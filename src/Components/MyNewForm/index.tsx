import { useState } from "react";

const MyNewForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Phone: "",
    location: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name,value } = e.target;
    setFormData((prev)=>({
      ...prev,
      [name] : value
    }))

  };

  const handleSubmit = (e:React.FormEvent) =>{
     e.preventDefault()
     console.log(formData)
  }
  return (
    <form className="h-[50vh] w-full bg-blue-700 flex flex-col justify-center items-center">
      <input onChange={handleInputChange} type="text" placeholder="fullName" name="fullName" /> <br /> <br />
      <input onChange={handleInputChange} type="text" placeholder="email" name="email" /> <br /> <br />
      <input onChange={handleInputChange} type="text" placeholder="Phone" name="Phone" /> <br /> <br />
      <input onChange={handleInputChange} type="text" placeholder="Location" name="location" /> <br /> <br />
      <button type="submit" onSubmit={handleSubmit}></button>
    </form>
  );
};

export default MyNewForm;
