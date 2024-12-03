import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import image from "../../Images/icon.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { selectCartCount } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';




const pages = ['NEW ARRIVALS', 'Products', 'Brands', 'contacts', 'about'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const cartCount = useSelector(selectCartCount);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleNewArrivalsClick = () => {
        const element = document.getElementById("newArivals");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/dashboard');
        }
    };


    const handlePageClick = (page) => {

        navigate('/productPage');

    };


    const handleBrandClick = () => {
        const element = document.getElementById("brand");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/dashboard');
        }
    };

    const handleContactClick = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/dashboard');
        }
    };

    const handleAboutClick = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/dashboard');
        }
    };


    return (
        <AppBar position="static" sx={{ backgroundColor: '#974e4e;' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo Image */}
                    <img
                        src={image}
                        alt="Logo"
                        style={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginRight: '8px', width: '50px', height: '50px' }}
                    />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        onClick={() => navigate('/dashboard')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'

                        }}
                    >
                        AURA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={page === 'NEW ARRIVALS' ? handleNewArrivalsClick : page === 'Products' ? handlePageClick :
                                    page === 'Brands' ? handleBrandClick : page === 'contacts' ? handleContactClick :
                                        page === 'about' ? handleAboutClick : handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        onClick={() => navigate('/dashboard')}
                        sx={{
                            mr: 2,

                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        AURA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '30px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={page === 'NEW ARRIVALS' ? handleNewArrivalsClick : page === 'Products' ? handlePageClick :
                                    page === 'Brands' ? handleBrandClick : page === 'contacts' ? handleContactClick :
                                        page === 'about' ? handleAboutClick : handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', fontSize: '17px' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Shopping Cart">
                            <IconButton sx={{ p: 0 }}>
                                <ShoppingCartIcon 
                                 onClick={() => navigate('/cart')}
                                sx={{ fontSize: 30, color: 'white', marginRight: '12px' }} />
                                 {cartCount > 0 && (
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '50%',
                                padding: '5px 5px',
                                fontSize: '12px',
                                marginTop:'-10px',
                               
                               
                            }}>
                                {cartCount}
                            </div>
                        )}
                            
                            
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleIcon sx={{ fontSize: 30, color: 'white' , marginLeft:'10px'}} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
