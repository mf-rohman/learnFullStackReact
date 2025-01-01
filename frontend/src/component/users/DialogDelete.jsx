import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ActionDeleteUser from './ActionDeleteUser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function DialogDelete({openDialog, onClose, userData}) {
  
  const [deleteAgree, setDeleteAgree] = useState(false); //state to open alert dialog  

  const [isDialogDelete, setIsDialogDelete] = useState(true); //state to

  //open alert dialog
  const handleDeleteAgree = () => {
    setIsDialogDelete(false);
    setDeleteAgree(true);
    
  }
  return (
    <>
    {isDialogDelete && (
    <React.Fragment>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Delete this user {userData?.userid}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="success" onClick={onClose}>Disagree</Button>
          <Button variant="outlined" color="error" onClick={handleDeleteAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    )}
    {deleteAgree && (
        <ActionDeleteUser
        openDialog={setDeleteAgree}
        userData={userData}
        onClose={onClose}
        />
    )}
    </>
  );
}
