import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';  
import { Typography,  Button} from '@mui/material'; 
import { removeFromCart, resetCartCount, resetCountComplete } from '../../redux/cartSlice'; 


const Cart = () => {

    const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// Handle removing an item from the cart

const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));   
  };

  useEffect(() => {
    // Reset cart count when navigating to the cart page
    dispatch(resetCartCount());

    // Set flag back to false after cart count is reset
    return () => dispatch(resetCountComplete());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '10px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#974e4e' }}>
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="h6">Your cart is empty.</Typography>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '10px', borderRadius: '8px' }} />
                <div style={{ display: 'inline-block' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.brand}</Typography>
                  <Typography variant="body1" sx={{ color: '#974e4e' }}>LKR {item.price}.00</Typography>
                  <Typography variant="body2">Quantity: {item.quantity}</Typography>
                  <Button 
                    variant="outlined" 
                    color="error" 
                    onClick={() => handleRemoveItem(item.id)} 
                    sx={{ marginTop: '10px', marginLeft: '10px' }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            {/* Display total price */}
            <Typography variant="h5" sx={{ color: '#974e4e', marginTop: '20px'  }}>
              Total Price: LKR {totalPrice.toFixed(2)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
