import React from 'react';
import {
  Card, CardMedia, CardContent, Typography,
  CardActions, Button, Rating, Chip, Stack
} from '@mui/material';

function BookCard({ book, addToCart }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="300"
        image="https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg"
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{book.title}</Typography>
        <Typography variant="body2" color="text.secondary"><strong>Author:</strong> {book.author}</Typography>
        <Typography variant="body2"><strong>ISBN:</strong> {book.isbn}</Typography>
        <Typography variant="body2"><strong>Publisher:</strong> {book.publisher}</Typography>
        <Typography variant="body2" gutterBottom><strong>Category:</strong> {book.category}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>{book.description}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1, mb: 1 }}>
          <Chip label={`$${book.price}`} color="primary" />
          <Chip label={`${book.stock} in stock`} color={book.stock > 0 ? "success" : "error"} />
        </Stack>
        <Rating value={book.rating} precision={0.1} readOnly />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          fullWidth
          onClick={() => addToCart(book)}
          disabled={book.stock === 0}
        >
          {book.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
