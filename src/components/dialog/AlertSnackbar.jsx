import { Alert, Snackbar, Stack } from '@mui/material';
import React from 'react';
import { usePerson } from '../person/PersonProvider';

const AlertSnackbar = () => {

  const {severity, message, handleCloseAlert, open} = usePerson().alertData
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AlertSnackbar;
