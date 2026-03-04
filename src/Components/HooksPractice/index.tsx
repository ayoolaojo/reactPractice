import { useEffect, useRef, useState } from "react"


const HooksPractice = () => {

   const[name, setName] = useState('')
   const prevName = useRef('')

   useEffect(()=>{
     prevName.current = name
   },[name])
    

     


  const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)

   
  }
    
  return (
    <div> 
        <input  value={name} onChange={handleName} type="text" />

         <p>My name is: {name} </p>
         <p>previous Name is: {prevName.current}</p>
     
    </div>
  )
}

export default HooksPractice
