/* eslint-disable @next/next/no-img-element */
import AuthInput from "@/components/auth/authInput";
import { useState } from "react";


export default function Auth(){
    const [modo, setModo] = useState<'login'| 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit=()=>{
        console.log(`email: ${email}, password: ${password}`)
    }
    
    return(
        <div className="flex w-full h-screen 
        items-center justify-center">
         <div className="hidden md:flex w-full h-full">
            <img 
            className="hidden md:flex w-full h-full object-fit"
            src="https://i.ebayimg.com/images/g/odoAAOSwnDZUBbJY/s-l1600.jpg" alt="img" />
        </div>
        
        <div  className=" w-full h-screen flex 
         md:w-1/2 xl:w-1/3 mx-8 items-center 
         justify-center">
       
            <div className="w-full">
                <h1 className="text-lg py-2">
                    {
                        modo==='login'?
                        'Entre com sua conta' :
                        'Cadastre-se na plataforma'
                    }
                </h1>
                <AuthInput label="Email"
                type="email"
                value={email}
                changeValue={setEmail}/>
                <AuthInput label="password"
                type="password"
                value={password}
                changeValue={setPassword}/>
                <button
                className="
                bg-blue-500 hover:bg-blue-400 mt-6
                w-full py-2 rounded-xl
                "
                onClick={submit}>
                    {modo==='login'?'Entrar': 'cadastre-se'}
                </button>
                <hr className="text-gray-300 my-3" />
                <button className="
                  bg-red-500 hover:bg-red-400 w-full py-2 rounded-xl
                "
                 onClick={submit}>
                    Entrar com o Google
                </button>
                {
                    modo==='login'?(
                        <p className="mt-8">
                            Novo por aqui? 
                            <button className="text-blue-600 px-1"
                              onClick={()=>setModo('cadastro')}>
                                Crie uma conta gratuita
                            </button>
                        </p>
                    ):(
                        <p className="mt-8">
                            Já criou seu cadastro? 
                            <button className="text-blue-600 px-1"
                             onClick={()=>setModo('login')}>
                                Aproveite sua conta
                            </button>
                        </p>
                    )
                }
            </div>
        </div>
        </div>
    )
}