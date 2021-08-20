import React, {useState} from 'react';
import { Card, CardHeader, Button, CardMedia, CardContent, Typography } from '@material-ui/core';
import { ExpandMore, LensTwoTone } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { ControlSize } from './Extras';
import { cardStyle } from './Styles';
// context
import { useGlobalContext } from './context';

// primary card component 
const Cards = (props) =>{
    const {windowWidth} = ControlSize();
    const {title, subheader, image, cardContent} = props;
    const classes = cardStyle();

    return(
    <>
        <Card className={classes.root} style={{cursor:'pointer', background: '#1c0000', overflowY:'auto'}} >
            <CardHeader
                title={title}
                subheader={subheader}
                className={classes.cardHeader}
            />
           {/* <ExpandButton/> */}
            <CardMedia
                component='img'
                className={classes.media}
                src={image}
                style={{maxHeight: '500px'}}
            />
                <CardContent>
                    <Typography className={classes.cardContentText} paragraph>
                        {cardContent}
                    </Typography>
                </CardContent>
        </Card>
    </>
    )
}
    // const ExpandButton = ()=>{
    //     const text = 'Read More';
    //     return(
    //         <Link to='' style={{textDecoration:'none'}}>
    //             <Button className={classes.readMore}>
    //                 {windowWidth < 800 ? <ExpandMore style={{fontSize:'40px'}}/> : (<p>{text}</p>)}
    //             </Button>
    //         </Link>
    //     )
    // }
export default Cards;