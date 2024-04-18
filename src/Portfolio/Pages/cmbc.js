import React from 'react'
import{useMediaQuery} from '@mui/material';
// import { Maximize } from '@mui/icons-material';
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

 







