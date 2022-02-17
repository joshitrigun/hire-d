import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Box sx={style}>
    <JobDetail 
    title={title}
    first_name={employer}
    job_type={jobType}
    city={city}
    province={province}
    tech_stack={tech_stack}
    description={description}
    end_date={end_date}
    apply_link={apply_link}
    />
  </Box>
</Modal>