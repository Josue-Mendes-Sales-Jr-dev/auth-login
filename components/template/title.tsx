import 'tailwindcss/tailwind.css'
interface ITitleProps{
    title:string
    subtitle:string
}
export const Title=({title,subtitle}:ITitleProps)=>{
    return(
        <div>
          <h1 className="
          text-black text-3xl
          dark:text-white
          ">
            {title}
          </h1>
          <h2 className='
          
          text-gray-400'>
            {subtitle}
          </h2>
        </div>
    )
}