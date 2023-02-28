import { Alert, Snackbar } from '@mui/material';

function Snack(props) {
  const { isOpen, handleClose = Function.prototype } = props;
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity='success'>This product was added to cart!</Alert>
    </Snackbar>
  );
}

export default Snack;
