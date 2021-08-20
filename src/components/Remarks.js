import React from 'react'
import { makeStyles, Grid, Typography, LinearProgress, Card } from '@material-ui/core';
import Typewriter from 'typewriter-effect';

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
    remarksText:{
        fontSize:'clamp(7vw, 10vw, 13vw)',
        fontWeight: 'bold',
        color: '#FF0001',
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

const Remarks = () => {
    const [Loading, setLoading] = React.useState(true);
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
    return (
        <section className={classes.root}>
            <Typography variant='h3' className={classes.remarksText}>
                <Typewriter
                onInit={(typeText)=>{
                    typeText.typeString('Why have we chosen this topic?')
                    .start()
                }}>
                </Typewriter>
            </Typography>
            
            <Card className={classes.card} style={{overflowY: 'auto'}}>
                <Typography variant='h6' style={{padding: '20px', color:'red'}} paragraph>
                    The primary reason we have chosen this topic is to show our audience the power of history and what implications it can have if something of key importance is to be purposely forgotten or neglected like in the case of Lilith most probably being the first woman in existence. Like the story of Lilith we believe there are numerous other cases in history that may have been forgotten or purposely omitted in order to erase their sign or mark from history itself. As technology advances, more and more people are looking forward to a better future and are strongly inclined to give it their all when it comes to their present in order to secure a better future. But due 
                    to that very reason, most people are forgetting the importance of preserving history and nowadays even most universities and other education facilities are slowly getting rid of courses related to philosophy and history as people have begun to believe that only the present and future matters the most. 
                </Typography>
            </Card>

        </section>
    )
}

export default Remarks;
