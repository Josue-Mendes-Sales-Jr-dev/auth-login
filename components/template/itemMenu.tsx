import 'tailwindcss/tailwind.css'
import Link from 'next/link'

interface ISideMenuProps{
  url?:string
  text:string
  icon:any
  className?:string
  onClick?: (event:any)=>void
}
export const ItemMenu=(props:ISideMenuProps)=>{
  function renderiza(){
    return(
    <>
    <div className={`flex flex-col items-center`}>
      {props.icon}
      <h1 className={`text-xs text-gray-500 px-4 py-1
      hover:text-white`}>
       {props.text}
      </h1>
    </div>
    </>
    )
  }
    return(
       <li onClick={props.onClick} 
       className={`hover:text-gray-500 flex flex-col
        justify-center items-center h-20 w-20 p-2  ${props.className}`}>
           
         { props.url?
         ( <Link href={props.url}>
            {renderiza()}
          </Link>):(renderiza())}
       </li>
    )
}