import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const products = [
  {
    name: 'Jordan 1',
    desc: 'New',
    price: '$699.99',
  },
  {
    name: 'Nike Dunk',
    desc: 'New',
    price: '$399.45',
  },
  {
    name: 'Yeezy',
    desc: 'New',
    price: '$699.51',
  },
  {
    name: 'Air Max',
    desc: 'New',
    price: '$914.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['123 Sneaker Way', 'Code County', 'Pa', '1234567', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Sneaker Head' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const btn={
  backgroundColor:'black'
}

export default function Review() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $3,075.01
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
       
          <Button style={btn} variant="contained" onClick={handleClick}>Back</Button>
       
      </Grid>
    </React.Fragment>
  );
}