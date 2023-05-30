import "tailwindcss/tailwind.css";
import { ItemMenu } from "./itemMenu";
import { HomeIcon, AdjustIcon, NewIcon, LogOutIcon } from "../icons/home";
import { Logo } from "./logo";

export const SideMenu = () => {
  return (
    <aside className="flex flex-col">
      <div
        className=" flex justify-center 
           dark:text-white
          items-center
          w-full h-20 bg-gradient-to-r
           from-purple-800 to-slate-500"
      >
        <Logo />
      </div>
      <ul className="flex-grow  dark:text-white">
        <ItemMenu url="/" icon={HomeIcon} text="Inicio" />
        <ItemMenu url="/adjust" icon={AdjustIcon} text="Ajustes" />
        <ItemMenu url="/new" icon={NewIcon} text="Novidades" />
      </ul>
      <ul>
        <ItemMenu
          onClick={() => console.log("logout")}
          icon={LogOutIcon}
          text="Sair"
          className="
            hover:bg-red-500 text-red-800 
             hover:text-white cursor-pointer w-full"
        />
      </ul>
    </aside>
  );
};
