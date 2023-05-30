import "tailwindcss/tailwind.css";
import UseAppContext from "@/hooks/useAppContext";
import { Moon, Sun } from "../icons/home";

export const Button = (props: any) => {
  const context = UseAppContext();

  return (
    <div className=" hidden sm:flex gap-1">
      {context.tema ? (
        <div>
          <button
            className="flex items-center justify-around
            p-1 bg-yellow-500 w-20 rounded-xl hover:bg-yellow-400  
            dark:text-white"
            onClick={context.alternarTema}
          >
            {Sun} dia
          </button>
        </div>
      ) : (
        <div>
          <button
            className="flex items-center justify-around gap-2
            p-1 bg-purple-600 w-20 rounded-xl hover:bg-purple-400
           "
            onClick={context.alternarTema}
          >
            {Moon} noite
          </button>
        </div>
      )}
    </div>
  );
};
