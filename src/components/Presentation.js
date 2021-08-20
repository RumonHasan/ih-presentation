import React from 'react'
import { makeStyles, Grid, Typography, LinearProgress, Button, CircularProgress } from '@material-ui/core';
import Typewriter from 'typewriter-effect';
import '../services/Presentation.css';
import {Link} from 'react-router-dom';

//remark styles
const useStyle = makeStyles(theme=>({
    root:{  
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50px',
        flexDirection: 'column',
    },
    // remarks typography 
    presentText:{
        fontSize:'clamp(7vw, 10vw, 13vw)',
        fontWeight: 'bold',
        color: '#FF0001',
    }
}))

const Presentation = () => {
    const [Loading, setLoading] = React.useState(true);
    const [presentLoader, setPresentLoader] = React.useState(true);
    const classes = useStyle(); // main style components
    
    // loading controls
    React.useEffect(()=>{
        const LoadingTime = setTimeout(()=>{
            setLoading(false)
        }, 2000)
        return (()=>{
            clearInterval(LoadingTime)
        })
    },[])

    React.useEffect(()=>{
        const LoadingTime = setTimeout(()=>{
            setPresentLoader(false)
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
    return (
        <section className={classes.root}>
            <Typography variant='h1' className={classes.presentText}>
                <Typewriter
                onInit={(typeText)=>{
                    typeText.typeString('Presentation')
                    .start()
                }}>
                </Typewriter>
            </Typography>

            <div className={classes.presentation}>
                {
                    presentLoader ? <Typography variant='h5' style={{color:'red'}}>Loading...</Typography> :  (<iframe src="https://onedrive.live.com/embed?cid=0C471A845601A6D8&resid=C471A845601A6D8%21106&authkey=AIPU2Q4vSfqjM50&em=2" className='iframe'  frameborder="0" scrolling="no"/>)
                }
               
            </div>
            <Link to='/Credits' style={{textDecoration:'none', margin:'100px'}}>
                <Button variant='contained' style={{height: '60px', border: '2px solid red', background: 'transparent', color:'red'}}>
                    Jump To Self-Critique   
                </Button>
            </Link>

        </section>
    )
}

export default Presentation;