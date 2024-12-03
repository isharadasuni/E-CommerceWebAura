import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Select } from '@mui/material';

// Styles for search bar and dropdown
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #974e4e',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#974e4e',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#974e4e',
  flexGrow: 1,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '::placeholder': {
      color: '#974e4e',
    },
  },
}));

const DropdownSelect = styled(Select)(({ theme }) => ({
  color: '#974e4e',
  border: 'none',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-icon': {
    color: '#974e4e',
  },
}));

// Update Search Component to include min and max price inputs
const SearchWithPriceFilter = ({ category, setCategory, searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <DropdownSelect value={category} onChange={handleCategoryChange} displayEmpty inputProps={{ 'aria-label': 'Category' }}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Women">Women</MenuItem>
        <MenuItem value="Men">Men</MenuItem>
      </DropdownSelect>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchTerm}
          onChange={handleSearchChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>

      {/* Min Price and Max Price inputs */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #974e4e' }}
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #974e4e' }}
        />
      </div>
    </div>
  );
};

export default SearchWithPriceFilter;
