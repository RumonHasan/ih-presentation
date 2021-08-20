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
    creditsText:{
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
    }
}))

const Credits = () => {
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
            <Typography variant='h1' className={classes.creditsText}>
                <Typewriter
                onInit={(typeText)=>{
                    typeText.typeString('Self-Critique')
                    .start()
                }}>
                </Typewriter>
            </Typography>

            <Grid container direction='row' style={{marginTop: '50px'}}  spacing={3} alignItems='center'>
                {/* <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={6}>
                    <Card className={classes.card} style={{display:'flex', justifyContent:'center'}}>
                        <Typography variant='h3' style={{color:'red'}}>
                            Creators
                        </Typography>
                        <Carousel breakPoints={breakPoints}>
                            <img src={rumon} style={{width:'400px'}} alt={rumon}/>
                            <img src={yoi} alt={yoi}/>
                        </Carousel>
                    </Card>
                </Grid> */}
                <Grid item style={{display:'flex', justifyContent:'center'}} xs={12} sm={12}>
                    <Card className={classes.card} style={{overFlowY:'auto'}}>
                        <Typography variant='h6' style={{padding: '20px', color:'red'}} paragraph>
                        The information that we used are from people who had reviewed the original text. This limits the information that we actually get. There might be misinformation, misinterpretation, etc. The text that we include are very ancient and across different languages, cultures which results in a variety of different takes by different authors. The span for this project was less than 5 days which prevented us from getting into the deeper core of the project. 
                            The information on Lilith is scarce. It seems that we need to read the actual text in order to understand better and interpret Lilith better. This part we skipped due to its vast nature of the books and the difficulty it had on interpreting the text.
                            In this presentation we focused more on the designing front and less on with getting the information. We were afraid whether we had the actual information since there are conflicting ideas brought upon by different sources.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item style={{display:'flex', justifyContent:'center'}} xs={12}>
                <Link to='/Creators' style={{textDecoration:'none', margin:'100px'}}>
                    <Button variant='contained' style={{height: '60px', border: '2px solid red', background: 'transparent', color:'red'}}>
                        Get to Know The Creators   
                    </Button>
                </Link>
                </Grid>
            </Grid>

        </section>
    )
}

export default Credits;