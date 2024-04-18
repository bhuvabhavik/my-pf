import {React, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import MenuIcon from '@mui/icons-material/Menu';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
import filefolder from '../Portfolio/file.png'
import starplus from '../Portfolio/startplus.png'
import sap from '../Portfolio/sap1.png'
import down from '../Portfolio/download.png'
import stardele from '../Portfolio/stardelete.png'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Mainpage from './gridpage'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import{Box,useMediaQuery,Drawer, List, ListItem, ListItemText,Menu} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PrintIcon from '@mui/icons-material/Print';
import { FaDownload } from "react-icons/fa";


const Work = () => {

  const isMobileView = useMediaQuery('(max-width:600px)');
  const handleChange = (event) => {
    setAge(event.target.value);    
  };
   
  const [age, setAge] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('forward');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); 
     

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
      setArrowDirection(arrowDirection === 'forward' ? 'back' : 'forward');
    };
      
    const handleDrawerOpen = () => {  
      setIsDrawerOpen(true);
    };
    
    const handleDrawerClose = () => {
      setIsDrawerOpen(false);
    };
 
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
   
       
  return(
    <>
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{backgroundColor: 'rgba(53, 74, 95, 1)'}}>
    <Toolbar>
   
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
      <MenuIcon/>
      </IconButton>
   
      {!isMobileView && (           
              <>
      <Typography variant="h6" color="inherit"  sx={{ mr: 1 }} >
      <span className='underline'>M</span>enu
      </Typography>

      <Typography variant="h6" color="inherit"  sx={{ mr: 1  }}>
      <span className='underline'>E</span>dit
      </Typography>             

      <Typography variant="h6" color="inherit"  sx={{ mr: 1 }}>
      <span className='underline'>F</span>avorites
      </Typography>

      <Typography variant="h6" color="inherit"  sx={{ mr: 1 }}>
      Extr<span className='underline'>a</span>s
      </Typography>

      <Typography variant="h6" color="inherit"  sx={{ mr: 1 }}>
      S<span className='underline'>y</span>stem
      </Typography>

      <Typography variant="h6" color="inherit"  sx={{ flexGrow: 1 }}>
      <span className='underline'  >H</span>elp
      </Typography>
      </>
      )}

      <Typography variant="h6" color="inherit">
      {arrowDirection === 'forward' ? (
        <ArrowForwardIosIcon onClick={toggleVisibility} />
      ) : (
        <ArrowBackIosIcon onClick={toggleVisibility} />
      )}
      {!isHidden && <span style={{ marginRight: '8px' }}>GOPAL_DEV</span>}
              <SlideshowIcon sx={{ ml: 5, mr: 1  }}/>
               <MinimizeIcon sx={{ mr: 1  }} />
              <FilterNoneIcon sx={{ mr: 1 }}/>
              <CloseIcon sx={{ mr: 1 }}/>
      </Typography>
  

    </Toolbar>
  </AppBar>
<hr color='gray' style={{ marginTop: 0, marginBottom: 0 }} />
</Box>
{isMobileView && (
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          // PaperProps={{ style: { width: '300px' } }}
        >
          <List>
            {['Edit', 'Favorites', 'System', 'Help'].map((text, index) => (
              <ListItem key={text}>
                 <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}



  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{backgroundColor: 'rgba(53, 74, 95, 1)'}}>
    <Toolbar>
             
      <Typography variant="h6" color="inherit" component="div">
      <img src={sap} alt="not show" style={{ width: isMobileView ? '120px' : '220px', height: isMobileView ? '30px' : '45px' }} />
      </Typography>  
       
     <Typography variant="h6" color="inherit" component="div" style={{ color: 'white', fontWeight: 'bold', fontSize: isMobileView ? '15px' : '30px', lineHeight: '1.8' , marginLeft:  isMobileView ? '15%' : '30%'}}>
     SAP Easy Access
    </Typography>
    </Toolbar>
  </AppBar>
   <hr color='gray' style={{ marginTop: 0, marginBottom: 0 }} /> 
 </Box>



  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{backgroundColor: 'rgba(10, 25, 20,70)'}}>
    <Toolbar >

    
      <Typography sx={{ mr: 1 ,  backgroundColor: 'rgba(10, 25, 20, 70)', color: 'white'}} >
      <Select
              className="form-select mx-1 my-1 "
              aria-label="Default select example"
              sx={{ width: '240px', height:'5vh', 
              color: 'white', // Set color of Select component
              '& .MuiSelect-icon': {
                color: 'white',// Set color of Select arrow icon
              },
              '& .MuiListItem-root': {
                color: 'white',  // Set color of Select items
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Set border color to white
              },
            }}
              value={age}
              onChange={handleChange}
            > 

          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
                </Select> 
      </Typography>

      {!isMobileView && (
            <>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <img src={filefolder} alt="not show" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} />
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <img src={down} alt="some" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} />
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
       <FaDownload />
      {/* <img src={starplus} alt="image" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} /> */}
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <img src={stardele} alt="Refrace" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} />
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <EditOutlinedIcon/>
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <KeyboardArrowDownOutlinedIcon/>
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }}>
      <KeyboardArrowUpOutlinedIcon />
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1, marginLeft:'800px' }}>
      <SearchIcon />
      </Typography>
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1, marginLeft:'20px' }}>
      <ZoomInIcon/>
      </Typography> 
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1, marginLeft:'20px' }}>
      <PrintIcon/>                   
      </Typography> 
      <Typography variant="h6" component="div" sx={{ mr: 1, color:'white', marginLeft:'20px' }}>
        Exit
      </Typography>
      </>
          )}
          

          {isMobileView && (
            <>
              <Typography variant="h6"  component="div" >
                <IconButton
                  aria-label="more"
                  aria-controls="more-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{color:'white', ml:3}}
                >
                  More<KeyboardArrowDownOutlinedIcon />
                </IconButton>
                <Menu
                  id="more-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/* Add additional menu items here */}
                  <MenuItem onClick={handleClose}> <img src={filefolder} alt="sap" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} /></MenuItem>
                  <MenuItem onClick={handleClose}> <img src={down} alt="down" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} /></MenuItem>
                  <MenuItem onClick={handleClose}> <img src={starplus} alt="work" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} /></MenuItem>
                  <MenuItem onClick={handleClose}><img src={stardele} alt="edit" className=' mx-0 my-2 p-1' style={{ width: '60px', height: '30px' }} /></MenuItem>
                  <MenuItem onClick={handleClose}> <KeyboardArrowDownOutlinedIcon style={{marginLeft:'3px',  width: '60px', height: '40px'}}/></MenuItem>
                  <MenuItem onClick={handleClose}>   <KeyboardArrowUpOutlinedIcon style={{marginLeft:'3px',  width: '60px', height: '40px'}} /></MenuItem>
                  <MenuItem onClick={handleClose}> <EditOutlinedIcon style={{marginLeft:'5px',  width: '60px', height: '30px'}}/></MenuItem>
                  <MenuItem onClick={handleClose}> <SearchIcon  style={{marginLeft:'5px',  width: '60px', height: '30px'}}/></MenuItem>
                  <MenuItem onClick={handleClose}> <ZoomInIcon style={{marginLeft:'5px',  width: '60px', height: '30px'}}/></MenuItem>
                  <MenuItem onClick={handleClose}> <PrintIcon style={{marginLeft:'5px',  width: '60px', height: '30px'}}/></MenuItem>
                  <MenuItem onClick={handleClose} > <div style={{textAlign:'center',  width: '60px', height: '30px'}}>Exit</div></MenuItem>
                  
                </Menu>
              </Typography>
            </>
          )}
          
           {/* {isMobileView && (
      <Typography variant="h6" color="inherit" component="div" sx={{ mr: 1 }} >
       More<KeyboardArrowDownOutlinedIcon  />
      </Typography>
           )} */}
    </Toolbar>
  </AppBar>
<hr color='gray' style={{ marginTop: 1, marginBottom: 1 }} />
</Box>

<Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" >
    <Toolbar sx={{ backgroundColor:'rgba(25, 50, 85, 50)'}} >
      <Typography sx={{width:'100%', height:'100%'}}>
      <Mainpage/>
      </Typography> 
    </Toolbar>
  </AppBar>
  </Box>

</>
  )
}

export default Work;


