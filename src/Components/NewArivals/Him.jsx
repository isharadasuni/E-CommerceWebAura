import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import him1 from "../../Images/f1.jpg";
import him2 from "../../Images/f2.png";
import him3 from "../../Images/f3.jpg";

const Him = () => {
  const navigate = useNavigate();
  const images = [
    { src: him1, alt: 'him 1' },
    { src: him2, alt: 'him 2' },
    { src: him3, alt: 'him 3' },
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

export default Him;
