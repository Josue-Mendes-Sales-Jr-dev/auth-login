import { useContext } from "react";
import AppContext from "@/context/appContext";



// outra forma const {name, altenarTema}=useContext(appContext)

const UseAppContext=()=> useContext(AppContext)

export default UseAppContext
