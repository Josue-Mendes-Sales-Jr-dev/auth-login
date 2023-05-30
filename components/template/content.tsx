interface ISideMenuProps{
    children: React.ReactNode
}
export const Content=({children}:ISideMenuProps)=>{
    return(
        <div>
         {children}
        </div>
    )
}