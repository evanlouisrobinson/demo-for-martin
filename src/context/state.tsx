import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AppContextInterface {
  currentPage: string,
  setCurrentPage: Function,
  pageNames: string[],
}

const AppContext = createContext<AppContextInterface | null>(null);

type AppWrapperProps = {
  children: ReactNode,
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [currentPage, setCurrentPage] = useState("home");

  let sharedState: AppContextInterface = {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    pageNames: ["films", "people", "planets", "species", "starships", "vehicles"],
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}