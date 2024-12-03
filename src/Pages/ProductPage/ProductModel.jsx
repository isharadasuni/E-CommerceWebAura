import React, { useState } from "react";
import { Button, Typography, Grid, TextField, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";


const ProductModel = ({ open, product, onClose }) => {


  const [addedQuantity, setAddedQuantity] = useState(1);
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState("")
  if (!open) return null;


  const handleQuantityChange = (event) => {
    const value = Math.max(1, Math.min(event.target.value, product.quantity));
    setAddedQuantity(value);
  };


  // Handle Add to Cart
  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: addedQuantity,
      image: product.image,
      size: product.size,
      category: product.category,
    };

    dispatch(addToCart(cartProduct));

    // Set success message
    setAlertMessage("Product added to cart successfully!");

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };


  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "70%",
          maxHeight: "80%",
          overflowY: "auto",
        }}
      >
        <Grid container spacing={3} sx={{ padding: 4 }}>
          <Grid item xs={12} md={6}>

            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>

            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="h6" color="textSecondary" paragraph>
              {product.brand}
            </Typography>

            <Typography variant="h5" color="primary" paragraph
              sx={{
                color: '#974e4e',

              }}>
              LKR {product.price}.00
            </Typography>


            <Typography variant="body1" paragraph sx={{ color: '#974e4e' }}>
              Available: {product.quantity} in stock
            </Typography>

            {/* Quantity Selector */}
            <TextField
              type="number"
              label="Quantity"
              value={addedQuantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1, max: product.quantity }}
              size="small"
              sx={{
                marginBottom: "10px", width: '100px', color: "rgba(41, 39, 39, 0.932)",
                '&:hover': {
                  borderColor: "rgba(41, 39, 39, 0.932)"
                },

              }}
            />

            <br />


            <Button variant="contained" color="primary"
              sx={{
                backgroundColor: '#974e4e',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#c35f5f',
                },
              }}
              onClick={handleAddToCart}

            >
              Add to Cart
            </Button>


            <Button
              variant="outlined"
              onClick={onClose}
              style={{ marginLeft: "10px", color: " rgba(41, 39, 39, 0.932)", borderColor: "rgba(41, 39, 39, 0.932)" }}
            >
              Close
            </Button>
          </Grid>
        </Grid>


        {/* Description Section with a border and alignment */}
        <div style={{ marginTop: '50px' }} >
          <Typography
            variant="h6"
            style={{

              color: " rgba(41, 39, 39, 0.932)",
              fontWeight: "bold",
              textAlign: "left",
              marginTop: "-80px"
            }}
          >
            Description
          </Typography>
          
          <Typography variant="body1"
            style={{

              border: "2px solid #974e4e",
              textAlign: "left",
              padding: "10px",
              color: " rgba(41, 39, 39, 0.932)",


            }}>
            {product.description}
          </Typography>



          {/* Snackbar for alert */}
          <Snackbar
            open={alertMessage !== ""}
            autoHideDuration={3000}
            onClose={() => setAlertMessage("")}
            message={alertMessage}
          />

        </div>
      </div>
    </div>
  );
};

export default ProductModel;