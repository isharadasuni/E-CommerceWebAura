import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#974e4e',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} AURA PERFUME. All rights reserved.
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          Designed and developed by <strong>IDS</strong>.
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <Link href="/terms-of-service" underline="hover" color="inherit">
            Terms of Service
          </Link>{' '}
          |{' '}
          <Link href="/privacy-policy" underline="hover" color="inherit">
            Privacy Policy
          </Link>
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          Contact us:{' '}
          <Link href="mailto:info@exclusivelines.lk" underline="hover" color="inherit">
            isharadasuni160@gmail.com
          </Link>
        </Typography>
        
      </Container>
    </Box>
  );
};

export default Footer;
