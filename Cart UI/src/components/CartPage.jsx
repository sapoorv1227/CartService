import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

function CartPage({ cart, onBack, onIncrease, onDecrease, onEmptyCart }) {
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  const calculateTotal = () => {
    return groupedCart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {groupedCart.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price} | Quantity: ${item.quantity} | Total: $${item.totalPrice.toFixed(2)}`}
              />
              <IconButton onClick={() => onDecrease(item)}>
                <Remove />
              </IconButton>
              <IconButton onClick={() => onIncrease(item)}>
                <Add />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: ${calculateTotal()}
      </Typography>
      <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color="error" fullWidth sx={{ mt: 2 }} onClick={onEmptyCart}>
        Empty Cart
      </Button>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => alert('Proceeding to checkout...')}>
        Checkout
      </Button>
    </Container>
  );
}

export default CartPage;