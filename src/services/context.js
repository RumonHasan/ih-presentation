import React, {useState, useContext, createContext ,useEffect} from 'react';
import { CardLabels } from './Extras';
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children })=>{
    const [cardId, setCardId] = useState(CardLabels)
    // submenu
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [location, setLocation] = useState({})
    const [title, setTitle] = useState('');
    // functions
    const showSubmenu = (title, positions)=>{
        setTitle(title);
        setLocation(positions)
        setOpenSubmenu(true);
    }
    const closeSubmenu = ()=>{
        setOpenSubmenu(false);
    }
    return (
        <GlobalContext.Provider value={{
            cardId,
            setCardId,

            // submenu
            showSubmenu,
            closeSubmenu,
            openSubmenu,
            location,
            title,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}
