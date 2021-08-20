import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { Home, Tv, People, QuestionAnswer, Poll, DeveloperBoard } from "@material-ui/icons";
import {Link} from 'react-router-dom';

const MenuItems = (props)=>{
    const {sideMenuControl} = props;// side menu control

    const menu = [{
        label: 'Home',
        icon: <Home/>,
        linkURL: '/'
    },
    {
        label: 'Presentation',
        icon: <Tv/>,
        linkURL: '/Presentation'
    },
    // {
    //     label: 'Remarks',
    //     icon: <QuestionAnswer/>,
    //     linkURL: '/Remarks'
    // },
    {
        label: 'Self-Critique',
        icon: <People/>,
        linkURL: '/Credits'
    },
    {
        label:'Feminist Icon',
        icon: <Poll/>,
        linkURL: '/Lilith',
    },
    {
        label:'Creators',
        icon:<DeveloperBoard/>,
        linkURL:'/Creators',
    },
    {
        label:'Why This Topic?',
        icon: undefined,
        linkURL:'/Why',
    }
]

const useStyles = makeStyles({
    root:{
        paddingTop: '20px',
        zIndex: 200,
    },
})
const classes = useStyles();

    return (
    <div className={classes.root}>
        <List>
            {
                menu.map((item, index)=>{
                    const {label, icon, linkURL} = item;
                    return(
                    <Link key={index} to={linkURL} onClick={()=>sideMenuControl(false)} style={{textDecoration:'none'}}>
                        <ListItem button key={label}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItem>
                    </Link>
                    )
                })
            }
        </List>
    </div>
    )
}

export default MenuItems;