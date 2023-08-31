import { createContext, useState } from "react";

export const LoginContext = createContext()


export const LoginContextProvider = ({children}) => {
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')))
  return (
    <LoginContext.Provider value={{login, setLogin}}>
        {children}
    </LoginContext.Provider>
  )
}
