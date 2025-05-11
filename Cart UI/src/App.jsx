import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import BookCard from './components/BookCard';
import Header from './components/Header';
import CartPage from './components/CartPage';

function App() {
  const [cart, setCart] = useState([]);
  const [books, setBook] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('https://group35-bookservice-htdtckgzazdefke9.southindia-01.azurewebsites.net/api/BookCatalog')
      .then((response) => response.json())
      .then((json) => {
        setBook(json);
      })
      .catch((err) => {
      });
  }, []);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const increaseQuantity = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const decreaseQuantity = (book) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.title === book.title);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        return updatedCart;
      }
      return prevCart;
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />
      {showCart ? (
        <CartPage
          cart={cart}
          onBack={() => setShowCart(false)}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onEmptyCart={emptyCart}
        />
      ) : (
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {books.map((book) => (
              <Grid item key={book.id}>
                <BookCard book={book} addToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default App;
