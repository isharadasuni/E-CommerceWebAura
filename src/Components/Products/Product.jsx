import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import pr1 from "../../Images/product 1.webp";
import pr2 from "../../Images/product2.png";
import pr3 from "../../Images/product 3.webp";

const Product = () => {
  const navigate = useNavigate();


  const products = [
    {
      src: pr1,
      alt: 'Product 1',
      name: 'ROSE PASSION',
      brand: 'EAU DE PARFUM',
      price: 'LKR. 25,300.00 – LKR. 32,100.00',
    },
    {
      src: pr2,
      alt: 'Product 2',
      name: 'GUCCI BLOOM ACQUA DI FIORI',
      brand: 'EAU DE PARFUM',
      price: 'LKR. 21,000.00 – LKR. 41,800.00',
    },
    {
      src: pr3,
      alt: 'Product 3',
      name: 'MY WAY INTENSE',
      brand: 'EAU DE PARFUM',
      price: 'LKR. 43,500.00 – LKR. 72,300.00',
    },
  ];


  const handleProductClick = () => {
    navigate('/productPage');
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center', gap: '100px', marginBottom: '50px' }}
      >
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              onClick={() => handleProductClick(index)}
              sx={{
                padding: 2,
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <img
                src={product.src}
                alt={product.alt}
                style={{
                  width: '100%',
                  height: '300px',
                  borderRadius: '8px',
                }}
              />
              <Typography sx={{ marginTop: 2, fontWeight: 'bold', color: '#974e4e' }}>
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                {product.price}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: '#777' }}>
                {product.brand}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Shop All Button */}
      <Button
        variant="contained"
        sx={{
          marginBottom: '40px',
          padding: '10px 20px',
          backgroundColor: '#974e4e',
          color: '#fff',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#c35f5f',
          },
        }}
        onClick={() => navigate('/productPage')}
      >
        Shop All
      </Button>
    </div>
  );
};

export default Product;
