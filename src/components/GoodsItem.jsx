import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia image={poster} component='img' sx={{ height: 140 }} alt={name} title={name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='body1'>Price: {price} USD.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
