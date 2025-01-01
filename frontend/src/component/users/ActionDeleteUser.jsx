import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

export default function ActionDeleteUser({onClose, userData }) {
const [open, setOpen] = React.useState(true);
  
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small" onClick = {onClose}>
            Close
          </Button>
        }
        
      >
        This Alert Delete user {userData?.name} Success
      </Alert>
    </Snackbar>
  );
}