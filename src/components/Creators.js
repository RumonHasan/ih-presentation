import React, {useState} from 'react'
import { makeStyles, Grid, Typography, LinearProgress, Card, CardContent, Button } from '@material-ui/core';
import Typewriter from 'typewriter-effect';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import rumon from '../assets/rumon.JPG';
import yoi from '../assets/yoi.jpg'

//remark styles
const useStyle = makeStyles(theme=>({
    root:{  
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50px',
        flexDirection:'column',
    },
    // remarks typography 
    creatorText:{
        fontSize:'clamp(7vw, 10vw, 13vw)',
        fontWeight: 'bold',
        color: '#FF0001',
    },
    linearProgress:{
        '& .MuiLinearProgress-bar':{
            background: 'red',
        }
    },
    card:{
        maxWidth: '800px',
        width: '700px',
        height: '600px',
        minHeight: '400px',
        background: '#520A0A',
        borderRadius: '5px',
        transition: '0.3s ease-in-out',
        overflowY:'auto',
        marginBottom: '40px',
        '&:hover':{
            transition: '0.3s',
            transform:'scale(1.05)',
        }
    },
    gridImage:{
        '& img':{
            width: '350px',
            height: '500px',
        },
 
    },
    img:{
        borderRadius:'10%',
        opacity: '0.7',
    }
}))

const Creators = () => {
    const [Loading, setLoading] = useState(true);
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

    // loading progress
    if(Loading){
        return (
            <LinearProgress
                className={classes.linearProgress}
                color='secondary'
            />
        )
    }
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
      ];

    return (
        <section className={classes.root}>
            <Typography variant='h1' className={classes.creatorText}>
                <Typewriter
                onInit={(typeText)=>{
                    typeText.typeString('Meet The Creators')
                    .start()
                }}>
                </Typewriter>
            </Typography>

            <Grid container alignItems='center' style={{marginTop: '50px'}}>
                <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6}>
                    <Carousel breakPoints={breakPoints}>
                        <img src={rumon} alt={rumon} className={classes.img} height='500px' width='450px'/>
                        <img src={yoi} alt={yoi} className={classes.img} height='500px' width='450px'/>
                    </Carousel>
                </Grid>
                <Grid item style={{display:'flex', justifyContent:'center', flexDirection:'column' }} xs={12} sm={6} className={classes.gridImage}>
                    <Typography variant='h4' style={{color:'red'}}>
                        Rumon Hasan: Economics Major (Senior)
                    </Typography>
                    <Typography variant='h4' style={{color:'red', marginTop:'50px'}}>
                        Yoi Thokchom: International Affairs Major (Junior)
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )

}

export default Creators;
