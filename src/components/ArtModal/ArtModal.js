import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./ArtModal.scss"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  outline: 'none',
  borderradius: '30',
  border: '2px solid #1A76D2',
  boxShadow: 10,
  p: 3,
};

function ArtModal({imgUrl, title, artist, medium}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <img src={imgUrl} onClick={handleOpen} />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

        <Box sx={style}>
            <div className="modal-left">
                <h2>{title}</h2>
                <h4>{artist}</h4>
                <p>{medium}</p>
            </div>
            <div className="modal-right">
                <img src={imgUrl} className="modal-image" />
            </div>
        </Box>
        </Modal>
    </>
  );
}

export {ArtModal}