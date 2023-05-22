import { SideMenu } from "./sideMenu"
import { Header } from "./header"
import { Content } from "./content"
interface ISideMenuProps{
    title:string
    subtitle:string
    children: React.ReactNode
}
export const Layout=({title,subtitle, children}:ISideMenuProps)=>{
    return(
        <div>
          <SideMenu/>
          <Header title={title} subTitle={subtitle}/>
          <Content>
            {
                children
            }
          </Content>
        </div>
    )
}