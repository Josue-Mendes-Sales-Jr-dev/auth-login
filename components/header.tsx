import { Title } from "./title"

interface IHeaderProps{
    title:string
    subTitle:string
}
export const Header=({title, subTitle}:IHeaderProps)=>{
    return(
        <div>
           <Title title={title} subtitle={subTitle}/>
        </div>
    )
}