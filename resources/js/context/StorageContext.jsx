import { useState,createContext,useEffect } from "react";

export const StorageContext = createContext();

export const StorageContextProvider = ({children}) => {

    const [items,setItems] = useState([]);

    useEffect(() => {
        //Pegando o valores no localStorege
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                let myItem = JSON.parse(localStorage.getItem(key,value));
                const novoItem = produtos.find((produto) => produto.nome == myItem)
                setItems(prevItems => [...prevItems, novoItem]);
            }
        }        
        
    },[localStorage])

    return (
        <StorageContext.Provider value={{items,setItems}}>
            {children}
        </StorageContext.Provider>
    )
}