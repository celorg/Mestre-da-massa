import { useState,createContext } from "react";

export const TotalContext = createContext();

export const TotalContextProvider = ({children}) => {

    const [total,setTotal] = useState([]);

    return (
        <TotalContext.Provider value={{total,setTotal}}>
            {children}
        </TotalContext.Provider>
    )
}



