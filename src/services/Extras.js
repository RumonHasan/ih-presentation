import React from 'react';
// window size 
export const ControlSize = () =>{
    const [size, setSize] = React.useState([window.innerHeight, window.innerWidth]);
    React.useEffect(()=>{
        const handleResize = ()=>{
            setSize([window.innerHeight, window.innerWidth]);
        }
        window.addEventListener('resize', handleResize);
    },[])
    return {windowWidth : size[1]};
}

export const CardLabels = [
    {
        id: 1,
        label: 'Lilith'
    },
    {
        id: 2,
        label: 'Eve'
    }
]
// power text
export const powerText = "Although Lilith is controversial some feminists have used her as a symbol of empowerment. For example, one Jewish feminist magazine is called Lilith labels itself as an 'Independent Jewish Woman's Magazine.' The publishers use Lilith as a title because they believe she is a symbol of independence. However, those who still think of her as a demoness could turn it around and once again label feminists as male bashers or men-haters. They see Lilith as wicked and vengeful towards men and children. With any symbol or icon used by feminists, especially within a religious context, there will be controversy and opposition. Whether or not the story of Lilith is accurate is not the main issue. The 'first Eve' version of the story gives Lilith a role that many women can identify within Judaism and other religious traditions. She is an independent woman who challenges the oppressive system in which she is placed. Stealing the lives of children represents a certain madness that accompanies her solitude and exclusion. Despite Lilith's downfalls, she still remains a symbol of power simply by her survival and mysteriousness. She is open for interpretation and therefore allows women to reinterpret her symbolism and power within the tradition."

export const critique = "";