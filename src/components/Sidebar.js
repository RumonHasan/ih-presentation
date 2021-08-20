import React, {useState} from 'react'
import  MenuItems  from '../services/Items';
import { useStyles } from '../services/Styles';
// material ui
import { Drawer, Button, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import { Menu, MenuOpen } from '@material-ui/icons';

const Sidebar = () => {
    // anchor postion
    const anchor = [
        'left', 'right', 'bottom', 'top'
    ];
    const [sideOpen, setSideOpen] = useState(false); // sidebar control
    const {root, sidebarButton, drawer, typeText} = useStyles();
    return (
    <>
        <AppBar position='static' className={root} style={{background:'transparent'}}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <Button className={sidebarButton} onClick={()=>setSideOpen(true)}>{sideOpen=== true ? <MenuOpen/> : <Menu/>}</Button>
                    </Grid>
                    <Grid item sm>
                    </Grid>
                    <Grid item>
                        <Typography className={typeText} variant='h5' component='h3'>
                            Intellectual Heritage
                        </Typography>
                    </Grid>
                </Grid>  
            </Toolbar>
        </AppBar>
        <Drawer className={drawer} elevation={16} anchor={anchor[0]} open={sideOpen} onClose={()=> setSideOpen(false)}>
                <MenuItems sideMenuControl={setSideOpen}/>
        </Drawer>
    </>
    )
}

export default Sidebar;
