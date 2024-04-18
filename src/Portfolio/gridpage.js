import { React, useState } from 'react'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import{useMediaQuery} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const backgroundColor = 'rgba(53, 74, 95, 1)'; // Define the color variable

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  backgroundColor: backgroundColor, // Set background color
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
    {...props}                                      
  />
))(({ theme }) => ({
  backgroundColor: backgroundColor, // Set background color
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${backgroundColor}`, // Set border color
}));

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



const Mainpage = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobileView = useMediaQuery('(max-width:600px)');
  const [expanded, setExpanded] = useState('panel1');
  // const [expandeded, setExpandeded] = useState('panel2');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>

    
      <div style={{ backgroundColor: 'gray', height: "100vh",width:'100wh', overflow: 'hidden' }} >

        <Grid container spacing={1} sx={{ height: '100vh' , width:'100wh'}} >

        <Grid item xs={isMobileView ? 12 : 4}>

            <div style={{ backgroundColor: 'rgba(53, 74, 95, 1)', height: '100vh' }}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography style={{ color: 'white' }}><FolderCopyOutlinedIcon /> Favorites </Typography>
                </AccordionSummary>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey', width: '100wh' }}>
                  <AccordionDetails style={{ marginLeft: '20px', marginTop: '-8px' }}>
                    <Typography style={{ color: 'white' }}>
                      <StarOutlinedIcon style={{ color: 'lightblue' }} /> SAP Flori LaunchedPad
                    </Typography>
                  </AccordionDetails>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey', width: '100wh' }}>
                  <AccordionDetails style={{ marginLeft: '20px', marginTop: '-8px' }}>
                    <Typography style={{ color: 'white' }}>
                      <StarOutlinedIcon style={{ color: 'lightblue' }} /> LaunchedPad Designer (Client-Specific)
                    </Typography>
                  </AccordionDetails>
                </Box>
              </Accordion>



              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography style={{ color: 'white' }}><FolderCopyOutlinedIcon /> SAP Menu </Typography>


                </AccordionSummary>
                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }} onClick={handleOpen}>
                    <Typography style={{ color: 'white' }} ><Link to="/display"><FolderOutlinedIcon /> Connector for Multi Bank Connectivity </Link></Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }} onClick={handleOpen}>
                    <Typography style={{ color: 'white' }} ><Link to="/roufce"><FolderOutlinedIcon /> Office </Link></Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Cross Application Components </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Logistics </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Accounting </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Human Resources </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Information System </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Service </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> Tools </Typography>
                  </AccordionSummary>
                </Box>

                <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel4d-header" style={{ marginLeft: '20px' }}>
                    <Typography style={{ color: 'white' }} ><FolderOutlinedIcon /> WebClient UI Framework </Typography>
                  </AccordionSummary>
                </Box>
              </Accordion>
            </div>
          </Grid>




          
          {/* {isMobileView && (
            <>
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Outlet  />
        </Box>
      </Modal>
            </>

          )}


   {!isMobileView && (
          <Grid item xs={8}>
        
            <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
              <Outlet />
            </div>
          </Grid>
   )}
        </Grid>
      </div> */}



{isMobileView ? (
    <>
      <Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{backgroundColor: 'black', width: '70wh', height: '70vh', ml:'-2px',mr:'5px',mt:15}}>
       <div onClick={handleClose}> <CloseIcon style={{color:'white', marginLeft:'92%',}} /></div>
        <hr style={{color:'gray'}}/>
        <div style={{marginLeft:'8px', marginTop:'10px'}}> <Outlet /></div>  
        </Box>
      </Modal>
    </>
  ) : (
    <Grid item xs={8}>
      <div style={{ backgroundColor: 'black', width: '100wh', height: '100vh' }}>
        <Outlet />
      </div>
      </Grid>
)
}

</Grid>
</div>
    </>
  )
}

export default Mainpage


