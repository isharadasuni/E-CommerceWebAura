import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "@fontsource/playfair-display"; 

const BrandItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(131, 120, 131, 0.61)',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#333',
  fontFamily: '"Playfair Display", serif',
  fontSize: '1.5rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 700,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#d4d4d4',
    cursor: 'pointer',
    transform: 'scale(1.05)',
    transition: '0.3s',
  },
}));

const Brand = () => {
  const brands = [
    "Chanel",
    "Dior",
    "Tom Ford",
    "Jo Malone",
    "Gucci",
    "Laurent",
    "Creed",
    "Versace",
    "Byredo",
    "Le Labo",
    "Hermès",
    "Bulgari",
   
  ];

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={3}>
        {brands.map((brand, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <BrandItem>{brand}</BrandItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brand;
