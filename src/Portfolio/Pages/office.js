import React from 'react'
import {useMediaQuery} from '@mui/material'

const Roufce = () => {

  const isMobileView = useMediaQuery('(max-width:600px)');

  
  return (
    <div style={{ marginLeft:'10px', marginTop:'2px' }}>
 <img style={{width: isMobileView ? '70wh' : '100wh', height: isMobileView ? '70vh' : '100vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7DR9Wyf_vtnlhDb0VjcfXYgGLsmAZ7LI3w&s" alt="SAP" />
     {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod qui incidunt corporis similique cumque, nisi perspiciatis doloribus, nobis ullam dicta nam esse laboriosam exercitationem assumenda rerum, officia sit. Maiores. */}
    </div>
  )
}

export default Roufce;



