import React from 'react'
import{useMediaQuery} from '@mui/material';
import { Maximize } from '@mui/icons-material';
import Iframe from 'react-iframe'

const Display = () => {

  const isMobileView = useMediaQuery('(max-width:600px)');


  return (

    <div>
    <Iframe
     src="
     https://www.bhavikbhuva.com"
     styles={{width: isMobileView ? '100%' : '100%', height: isMobileView ? '70vh' : '100vh'}} 
        />
    </div>
  )
}
export default Display;

 









{/* <img style={{width: isMobileView ? '70wh' : '100wh', height: isMobileView ? '70vh' : '100vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7DR9Wyf_vtnlhDb0VjcfXYgGLsmAZ7LI3w&s" alt="SAP" /> */}
{/* <Iframe url="https://www.linkedin.com/" title="Github"></Iframe> */}