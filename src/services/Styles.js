import { makeStyles } from "@material-ui/core"//styles
import Lilith from '../assets/lil-demon.jpeg'

// menu and header 
export const useStyles = makeStyles({
    root:{
        height: '60px',
        '& .MuiAppBar-root':{
          
        }
    },
    sidebarButton:{
        left: 0,
        "& .MuiSvgIcon-root":{
            fontSize: "35px",
            color: "#8B0000"
        },
        "& .MuiSvgIcon-root:hover":{
            transition: '0.3s',
            color: 'red',
            transform: 'scale(1.05)'
        }
    },
    typeText:{
        color: 'red',
        fontSize: '20px',
        fontWeight:'Bold',
    },

    drawer:{
        '& .MuiPaper-root':
        {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Lilith}) `,
            background: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))',
            width: '220px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'fixed',
        },
        '& .MuiButtonBase-root':{
            fontSize: '20px',
            color: '#8B0000',
            fontWeight: 'bold',
            
            '& .MuiTypography-root':{
                fontSize: '20px',
                color: 'red',
                fontWeight: 'bold'
            },
            '& .MuiTypography-root:hover':{
                transition: '0.3s',
                color: '#de1738',
            },

            '& .MuiSvgIcon-root':{
                fontSize: '20px',
                color: '#8B0000',
                fontWeight: 'bold'
            },
            '& .MuiSvgIcon-root:hover':{
                color: 'red'
            }
        },
  
        '& .MuiButtonBase-root:hover':{
            transition: '0.3s',
            color: 'red',
        },
    }
})

export const lilithCards = makeStyles(theme=>({
    root:{
        maxWidth: '500px',
        width: '500px',
        height: '600px',
        minHeight: '400px',
        background: 'transparent',
        borderRadius: '5px',
        transition: '0.3s ease-in-out',
        overflowY:'auto',
        '&:hover':{
            transform: 'scale(1.02)',
            border: '2px solid red',
            transition:'0.3s ease-in-out'
        }
    },
    cardHeader:{
        color:'red',
        fontSize:'50px',
        '& .MuiCardHeader-title':{
            fontSize:'40px',
            fontWeight:'bold',
        },
        '& .MuiCardHeader-subheader':{
            color:'red',
            fontWeight:'bold',
        }
    },
    cardContentText:{
        color: 'red',
    },
    powerCardText:{
        maxWidth: '700px',
        width: '700px',
        height: '600px',
        minHeight: '400px',
        background: 'red',
        borderRadius: '5px',
        transition: '0.3s ease-in-out',
        overflowY:'auto',
        border: '2px solid red',
        '&:hover':{
            transform: 'scale(1.02)',  
            transition:'0.3s ease-in-out'
        }
    }
}))

// card styles
export const cardStyle = makeStyles(theme=>({
    root:{
        maxWidth: '500px',
        width: '500px',
        height: '700px',
        minHeight: '400px',
        background: '#1c0000',
        borderRadius: '5px',
        transition: '0.3s ease-in-out',
        overflowY:'auto',
        position: 'relative',
        '&:hover':{
            transform: 'scale(1.02)',
            border: '2px solid red',
            transition:'0.3s ease-in-out'
        }
    },
    cardHovered:{
        transform:'scale(1.05)',
    },
    cardHeader:{
        color:'red',
        '& .MuiCardHeader-title':{
            fontSize:'40px',
            fontWeight:'bold',
        },
        '& .MuiCardHeader-subheader':{
            color:'red',
            fontWeight:'bold',
        }
    },
    cardContentText:{
        color: 'red',
    },
    readMore:{
        borderRadius:'60px',
        background: 'none',
        border: '2px solid red',
        position:'absolute',
        right: '10px',
        top: '20px',
        visibility: 'visible',
        transform: 'scale(1)',
        color: 'red',
        textAlign:'center',
        height: '40px',
        '&:hover':{
            transition: '0.3s',
            transform: 'scale(1.02)',
            background: '#B22222'
        }
    },
    // global scroll bar
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      }
}))