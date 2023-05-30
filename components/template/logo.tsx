import 'tailwindcss/tailwind.css'

export const Logo=()=>{
    return(
        <>
        <div className=' animate-spin
        flex flex-col gap-1 justify-center 
        items-center bg-black rounded-3xl
        w-12 h-12'>
            <div className='w-2 h-2 bg-blue-500 rounded-full'>
            </div>
             <div className='flex gap-1'>
                 <div className='w-2 h-2 bg-red-500 rounded-full'>
                 </div>
                 <div className='w-2 h-2 bg-purple-500 rounded-full'>
                 </div>
             </div>
        </div>
        </>
    )
}