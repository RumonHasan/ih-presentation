import React, {useState} from 'react'
import { makeStyles, Grid, Typography, LinearProgress, CardHeader, CardContent, Card, Button } from '@material-ui/core';
import Typewriter from 'typewriter-effect';
import Carousel from 'react-elastic-carousel';
import { lilithCards } from '../services/Styles';
// images 
import LilithPic from '../assets/lil-pic.jpeg';
import LilDemon from '../assets/lil-demon.jpeg';
import Lilith from '../assets/lilith.jpeg';
import Lil from '../assets/lil.jpeg';

import {powerText} from '../services/Extras'
import {Link} from 'react-router-dom';


//remark styles
const useStyle = makeStyles(theme=>({
    root:{  
        height: '100%',
        paddingTop: '50px',
        display: 'flex',
        justifyContent:'center',
        flexDirection: 'column',
    },
    // remarks typography 
    lilText:{
        fontSize:'clamp(7vw, 8.5vw, 8vw)',
        fontWeight: 'bold',
        color: '#FF0001',
    },
    linearProgress:{
        '& .MuiLinearProgress-bar':{
            background: 'red',
        }
    },
    gridContainer:{
        padding: '20px',
        marginTop: '20px',
    },
    gridImage:{
        '& img':{
            width: '350px',
            height: '500px',
            borderRadius: '10px',
        },
 
    },
}))

const LilithDomain = () => {
    const [Loading, setLoading] = useState(true);
    const {root, cardHeader, cardContentText, powerCardText} = lilithCards();
    const classes = useStyle(); // main style components
    const [readMore, setReadMore] = React.useState(false);
    
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

    // carousel breakpoints
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
      ];

    return (
        <section className={classes.root} id='info-grid'>
            <Grid container direction='row' className={classes.gridContainer} spacing={3} alignItems='center'>
                <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6}>
                    <Typography variant='h1' className={classes.lilText}>
                    <Typewriter
                    // options={{autoStart:true, loop:true}}
                    onInit={(typeText)=>{
                        typeText.typeString('First Independent Woman: Feminist Icon')
                        .start()
                    }}/>
                </Typography>
                </Grid>
                <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6} className={classes.gridImage}>
                    <Carousel breakPoints={breakPoints}>
                        <img src={LilithPic} alt={LilithPic}/>
                        <img src={LilDemon} alt={LilDemon}/>
                        <img src={Lilith} alt={Lilith}/>
                        <img src={Lil} alt={Lil}/>
                    </Carousel>
                </Grid>
            </Grid>

            <Grid container direction='row' style={{marginTop: '100px'}} className={classes.gridContainer2} spacing={3} alignItems='center'>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6}>
                            <Card className={root} style={{margin:'20px', background:'transparent'}}>
                                <CardHeader
                                    title='Who is Lilith?'
                                    className={cardHeader}
                                />
                                <CardContent>
                                    <Typography className={cardContentText} style={{color: 'red', fontSize:'20px'}}>
                                    According to the Alphabet of Ben Sira, Lilith was the first wife of adam. Adam and Lilith were created at the same time and both were made from clay. In the Jewish folklore, She is portrayed as a demon who kills infants and steals sperms from males at night. She is thought to be the serpent who convinces Eve to eat the forbidden fruit. 
                                    She is also used as a symbol of women empowerment.  
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6}>
                            <Card className={root} style={{margin:'20px', background:'transparent'}}>
                                <CardHeader
                                    title='First mention'
                                    className={cardHeader}
                                />
                                <CardContent>
                                    <Typography style={{color:'red', fontSize:'30px', fontWeight:'bold' }}>
                                        Genesis 1:27 “So God created man in his own image, in the image of God created he him; male and female created he them” Eve creation came in Genesis 2:22. 
                                    </Typography>
                                    <a href='https://www.biblegateway.com/passage/?search=Genesis%201%3A27&version=NIV' style={{textDecoration:'none', linkStyle:'none'}}>
                                        <Button style={{border: '2px solid red', textDecoration:'none', color:'red'}}>Read More</Button>
                                    </a>
                                </CardContent>
                            </Card>
                    </Grid>
            </Grid>

            <Grid container  direction='row' style={{marginTop: '100px'}} className={classes.gridContainer2} spacing={3} alignItems='center'>
                <Grid style={{display:'flex', justifyContent:'center'}} item xs={12} sm={4}>
                    <Typography variant='h1' component='h1' style={{color: 'red', fontSize:'clamp(7vw, 10vw, 13vw)', marginLeft: '15px' }}>
                        <Typewriter
                            // options={{autoStart:true, loop:true}}
                            onInit={(typeText)=>{
                                typeText.typeString('Lilith: Symbol Of Power')
                                .start()
                            }}/>
                    </Typography>
                </Grid>
                <Grid style={{display:'flex', justifyContent:'center'}} item xs={12} sm={8}>
                    <Card className={powerCardText} style={{margin:'20px', background:'transparent', overflowY: 'auto'}}>
                        <CardContent style={{overflowY: 'auto'}}>
                            <Typography paragraph style={{color: 'red', fontSize:'25px', marginLeft:'30px', overflowY: 'auto'}}>
                                {readMore ? powerText : `${powerText.substring(0,400)}...`}
                                <Button style={{color: 'red', background: 'none'}}
                                variant='contained' onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container  direction='row' style={{marginTop: '100px', marginBottom:'150px', display:'flex', justifyContent:'center'}} className={classes.gridContainer2} spacing={3} alignItems='center'>
                <Grid style={{display:'flex', justifyContent:'center'}} item xs={12} sm={12}>
                    <Link to='/Presentation' style={{textDecoration:'none', linkStyle:'none'}}>
                        <Button variant='contained' style={{height: '60px', border: '2px solid red', background: 'transparent', color:'red'}}>Jump To Presentation</Button>
                    </Link>        
                </Grid>
            </Grid>
        </section>
    )
}

export default LilithDomain;