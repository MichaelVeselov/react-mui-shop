import { ListItem, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = (props) => {
  const { removeFromOrder, name, price, quantity, id } = props;
  return (
    <ListItem>
      <Typography variant='body1'>
        {name} {price} USD x{quantity}
      </Typography>
      <IconButton onClick={() => removeFromOrder(id)}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
