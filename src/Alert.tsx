import type { ReactNode } from "react"

type AlertProps = {
  children: ReactNode,
  title?: string,
  
}

const Alert = ({children, title}:AlertProps) => {
  return (
    <div>
        <h3>{title}</h3>
        
        {children}

        <h2>DataSlid Software</h2>
        
    </div>
  )
}

export default Alert
