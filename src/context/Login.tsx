import { createContext, ReactNode, SetStateAction, useState } from "react";
import { IUser } from "../types/User";

type TContext = {
    user:IUser,
    setUser:React.Provider<SetStateAction<{}>>
}

export const Context = createContext<TContext | {}>({})

export const ContextProviber = ({children}:{children:ReactNode})=>{
    const [user, setUser] = useState<{}>({})

    return (
        <Context.Provider value={{user,setUser}}>{children}</Context.Provider>
    )
}