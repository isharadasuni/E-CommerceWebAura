import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import him1 from "../../Images/f1.jpg";
import him2 from "../../Images/f2.png";
import him3 from "../../Images/f3.jpg";


const Him = () => {
  // Image sources, replace with your actual image imports or URLs
  const images = [
    { src: him1, alt: 'him 1' },
    { src: him2, alt: 'him 2' },
    { src: him3, alt: 'him 3' },
  
   
  ];

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', gap:'100px', marginBottom:'50px' }}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper sx={{ padding: 1  }}>
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
