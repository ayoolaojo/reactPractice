
type ButtonProps = {
    text:string,
    isCurved?: boolean,
    bg?:string,
    color?:string,
    ht?:number,
    wt? : number,

}

const Button = ({text,isCurved = false,bg= 'white',color='blue',ht=40,wt=100}:ButtonProps) => {
  return (
    <button  style={{
        height:ht,
        width: wt,
        backgroundColor:bg,
        color:color,
        borderRadius: isCurved? 10 : 0,
        border:0,
        fontSize:16,
        fontWeight:600,
        
        
        
    }}>
       {text}
    </button>
  )
}

export default Button
