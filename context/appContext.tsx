import { createContext, useState } from "react";

type Tema = 'dark' | '';

interface IContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<IContextProps>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState<Tema>('');

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '');
  }

  const valorContexto: IContextProps = {
    tema,
    alternarTema,
  };

  return (
    <AppContext.Provider value={valorContexto}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
