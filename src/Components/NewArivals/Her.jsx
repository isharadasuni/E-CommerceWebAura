import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import her1 from "../../Images/p1.jpg";
import her2 from "../../Images/p2.jpg";
import her3 from "../../Images/p3.jpg";

const Her = () => {

  const navigate = useNavigate();
  const images = [
    { src: her1, alt: 'her 1' },
    { src: her2, alt: 'her 2' },
    { src: her3, alt: 'her 3' },
  ];

  const handleProductClick = () => {
    navigate('/productPage');
  };


  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: 'center', gap: '100px', marginBottom: '50px' }}
    >
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper
            onClick={() => handleProductClick(index)}
            sx={{
              padding: 1,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Her;
