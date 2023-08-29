import { useState, useContext, createContext, ReactNode } from "react";

type PasswordContext = {
  password: string;
  setPassword: (password: string) => void;
};
const PasswordContext = createContext({} as PasswordContext);

type PasswordContextProviderProps = {
  children: ReactNode;
};
export function PasswordContextProvider({
  children,
}: PasswordContextProviderProps) {
  const [password, setPassword] = useState<string>("");

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePasswordContext() {
  return useContext(PasswordContext);
}
