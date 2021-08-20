import React, {useState, useEffect} from 'react'
import { makeStyles, Grid,Button, Typography, LinearProgress } from '@material-ui/core';
import Cards from '../services/Cards';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';
import lil from '../assets/lil.jpeg';
import eve from '../assets/eve.jpeg';
import { useGlobalContext } from '../services/context';
import ChatBox from './ChatBox';

const cardContentText = [
    'According to medieval Jewish tradition, Lilith was Adam’s first wife, before Eve. When Adam insisted she play a subservient role, Lilith grew wings and flew away from Eden.',
    "Eve is known also as Adam's wife. According to the second chapter of Genesis, Eve was created by God by taking her from the rib of Adam, to be Adam's companion."
]

const HomePage = () => {
    const [showButton, setShowButton] = useState(false);
    const {closeSubmenu, showSubmenu} = useGlobalContext();
    const { cardId } = useGlobalContext();
    // button element
    const VSButton = ()=>{
        return(
            <Button className={classes.jumpButton} variant='contained' style={{transition: '0.3s ease-in-out'}}>Jump To Page</Button>
        )
    }
    // typewriter text 
    const headerText = ['First Woman?', 'First Wife?', 'Serpent?', 'She-Demon?']
    const [Loading, setLoading] = React.useState(true);
    const classes = useStyles(); // main style components
    
    // loading controls
    React.useEffect(()=>{
        const LoadingTime = setTimeout(()=>{
            setLoading(false)
        }, 2000)
        return (()=>{
            clearInterval(LoadingTime)
        })
    },[])

    // loading progress
    if(Loading){
        return (
            <LinearProgress
                className={classes.linearProgress}
                color='secondary'
            />
        )
    }
    // inner dimension function
    const getInnerDimensions = (e)=>{
        const text = e.target.textContent;
        const locationTemp = e.target.getBoundingClientRect();
        // scroll positions 
        let left = locationTemp.left
        let right = locationTemp.right
        let bottom = locationTemp.bottom 

        const centerPos = (left + right)/2; // center and bottom location
        const bottomPos = bottom + 5;
        console.log(centerPos)
        showSubmenu(text, {centerPos, bottomPos});
    }
    return (
    <>
        <div className={classes.root}>
            <Typography variant='h1' className={classes.headText} component='h1'>
                <Typewriter 
                    options={{autoStart: true, loop:true}}
                    onInit={(typeText)=>{
                        typeText.typeString(headerText[0])
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(headerText[1])
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(headerText[2])
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString(headerText[3])
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                    }}
                />
            </Typography>
             <Grid container  className='grid' spacing={3} direction='row' alignItems='center'>
                 <Grid item xs={12} sm={5} style={{display:'flex', justifyContent:'center'}} >
                    <Cards
                        title={<Typography style={{fontSize:'50px'}} onMouseLeave={closeSubmenu} onMouseOver={getInnerDimensions}>Lilith</Typography>}
                        subheader='The Lady Flying In Darkness'
                        image={lil}
                        cardContent={cardContentText[0]}
                    />
                 </Grid>
                 <Grid item xs={12} sm={2} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Link to='/Lilith' style={{textDecoration:'none'}}>
                        <VSButton/>
                    </Link>
                 </Grid>
                 <Grid item xs={12} sm={5} style={{display:'flex', justifyContent:'center'}} 
                    >
                    <Cards   
                        title={<Typography style={{fontSize:'50px'}} onMouseOver={getInnerDimensions} onMouseLeave={closeSubmenu}>Eve</Typography>}
                        subheader='First Woman?'
                        image={eve}
                        cardContent={cardContentText[1]}
                    />
                 </Grid>
             </Grid>
        </div>
    </>
    )
}

const useStyles = makeStyles(theme=>({
    root:{
        height: '100%',
        marginTop: '50px',
        padding: '40px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
    },
    headText:{
        paddingBottom: '40px',
        fontWeight: 'bold',
        color: '#FF0001',
        fontSize:'clamp(7vw, 10vw, 13vw)',
        
    },
    vsText:{
        color: 'red',
        fontSize:'clamp(7vw, 10vw, 13vw)',
        cursor:'pointer',
        fontWeight:'bold',
        transition: '0.3s ease-in-out',
    },
    jumpButton:{
        color:'red',
        border:'3px solid red',
        background:'transparent',
        '&:hover':{
            transition: '0.3s ease-in-out',
            background: '#800000',
            transform: 'scale(1.05)',
        }
    },
    grid:{

    }
}))

export default HomePage;

