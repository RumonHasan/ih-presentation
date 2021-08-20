import React,{useRef, useEffect} from 'react'
import { Typography } from '@material-ui/core';
import '../services/ChatBox.css';
import { useGlobalContext } from '../services/context';

const ChatBox = () => {
    const {openSubmenu, location:{centerPos, bottomPos}, title} = useGlobalContext();
    const texts = [`${title}:Have been cast out by God, but I will always be the first woman`, 
`${title}:I am and forever will be the first woman to have ever existed`]
    const submenuRef = useRef(null);
    React.useEffect(()=>{
        const submenu = submenuRef.current;
        submenu.style.left = `${centerPos}px`;
        submenu.style.top = `${bottomPos}px`;
    },[centerPos, bottomPos])
    return (
        <div className={openSubmenu ? 'chat-box box-main active': 'chat-box box-main'} ref={submenuRef}>
            {
                title === 'Lilith' ? texts[0]: texts[1]
            }
        </div>
    )
}


export default ChatBox;
