import 'tailwindcss/tailwind.css'
interface  AuthInputProps{
    label:string
    value: any
    type: 'text'| 'email' | 'password'
    changeValue: (newValue:any)=>void
}

export default function AuthInput(props:AuthInputProps){
    return(
        <div className="flex flex-col gap-1">
           <label >{props.label}</label>
           <input type={''? 'text' : props.type} 
           value={props.value}
           onChange={e=>props.changeValue?.(e.target.value)}
           className='outline-none  px-3 bg-gray-300 p-2 rounded-xl mb-2'
           />
        </div>
    )
}