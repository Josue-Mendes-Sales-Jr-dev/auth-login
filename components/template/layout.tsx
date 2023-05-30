import { SideMenu } from "./sideMenu";
import { Header } from "./header";
import { Content } from "./content";
import UseAppContext from "@/hooks/useAppContext";
import "tailwindcss/tailwind.css";
import { Button } from "./button";

interface ISideMenuProps {
  title: string;
  subtitle: string;
  children: any;
}
export const Layout = ({ title, subtitle, children }: ISideMenuProps) => {
  const context = UseAppContext();
  return (
    <div className={`${context.tema} flex h-screen w-screen`}>
      <SideMenu />

      <div
        className="flex flex-col
            w-full bg-gray-300 p-7
            dark:bg-slate-600 gap-5 dark:text-white"
      >
        <div
          className="flex justify-between items-center p-2
           w-full h-20"
        >
          <Header title={title} subTitle={subtitle} />
          <Button />
        </div>
        <Content>{children}</Content>
      </div>
    </div>
  );
};
