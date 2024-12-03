import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Searchbar/Search';
import "../ProductPage/productPage.scss";
import pr1 from "../../Images/product 1.webp";
import pr2 from "../../Images/product2.png";
import pr3 from "../../Images/product 3.webp";
import pr4 from "../../Images/product 4.webp";
import pr5 from "../../Images/m1.png";
import pr6 from "../../Images/m2.webp";
import pr7 from "../../Images/m3.avif";
import pr8 from "../../Images/m4.jpg";
import ProductModel from "../ProductPage/ProductModel";

const ProductPage = () => {

  const products = [
    {
      id: 1,
      image: pr1,
      name: 'ROSE PASSION',
      brand: 'EAU DE PARFUM',
      price: '25300',
      quantity: 10,
      description: 'JJimmy Choo’s Rose Passion eau de parfum encapsulates the label’s sensuality and femininity with its floral yet woody notes. Building its base around a harmonious blend of vanilla and sandalwood, the fragrance is met with delicate orchids and jasmines at its core. A marriage of fresh coconut water and frangipani flowers confirms this perfume’s summer-ready status, becoming the front-runner for your warm-weather signature scent.',
      size: '40ml',
      category: 'Women',
      sizes: ['40ml'], 
    },
    {
      id: 2,
      image: pr2,
      name: 'GUCCI BLOOM ACQUA DI FIORI',
      brand: 'EAU DE PARFUM',
      price: '21000',
      quantity: 5,
      description: 'Gucci Bloom Acqua Di Fiori Eau de Toilette is a new chapter that adds to the world of Gucci Bloom. The addition of green galbanum together with dainty cassis buds brings the soft dewy freshness of the early petal and a light, aquatic composition to the signature scent, designed to celebrate the authenticity, vitality and joyful energy of women. Blended by master perfumer Alberto Morillas, Gucci Bloom is created to unfold like its name, capturing the rich scent of a thriving garden filled with an abundance of flowers. Tuberose and jasmine coupled with Rangoon Creeper — a unique flower discovered in South India to create a rich fragrance that transports the wearer to an imaginary garden.',
      size: '100ml',
      category: 'Women',
      sizes: ['100ml'], 
    },
    {
      id: 3,
      image: pr3,
      name: 'MY WAY INTENSE',
      brand: 'EAU DE PARFUM',
      price: '43500',
      quantity: 8,
      description: 'MY WAY INTENSE is an invitation to a journey of self-discovery, meaningful encounters and amplified experiences. An amplified florality on an addictive woody trail, made of consciously sourced ingredients. The floral perfume opens with bright notes of orange blossom from Egypt. A new intense heart of tuberose from India unveils a creamy and velvety facet of the floral signature. At the base of the women’s fragrance, the sandalwood from New Caledonia takes an addictive creamy turn, as it meets a voluptuous Vanilla from Madagascar.',
      size: '50ml',
      category: 'Women',
      sizes: ['50ml'], 
    },
    {
      id: 4,
      image: pr4,
      name: 'SEXY AMBER EAU DE PARFUM',
      brand: 'EAU DE PARFUM',
      price: '25300',
      quantity: 6,
      description: 'Sexy is as sexy does. We bottled the essence of sensual-chic in our Michael Kors Sexy Amber, a sumptuous, nuanced fragrance that exudes allure with your every turn. A single spritz conjures warm amber wrapped in sandalwood, layered with white flowers—no wonder you feel irresistible.',
      size: '75ml',
      category: 'Women',
      sizes: ['75ml'], 
    },
    {
      id: 5,
      image: pr5,
      name: 'ARMANI CODE EAU DE TOILETTE',
      brand: 'EAU DE PARFUM',
      price: '41650',
      quantity: 7,
      description: 'Giorgio Armani introduces Armani Code EAU DE TOILETTE, an iconic men’s fragrance entering a new era. Discover the timeless olfactory composition encapsulated in a new statement bottle that is both striking in design and crafted to last. This Ambery Woody cologne never ceases to create a mood of seductive and sensitive masculinity reflecting the contemporary, forward-looking man. With sustainability at its heart, the EAU DE TOILETTE looks towards the future with sustainable ingredients and a refillable flacon designed to last.',
      size: '50ml',
      category: 'Men',
      sizes: ['50ml'], 
    },
    {
      id: 6,
      image: pr6,
      name: 'BOSS THE SCENT',
      brand: 'EAU DE TOILETTE',
      price: '39400',
      quantity: 9,
      description: 'BOSS The Scent eau de toilette. Exquisite notes of ginger, exotic maninka and leather unfold in BOSS The Scent over time, awakening and seducing the senses. Spritz it on for an irresistible fragrance that lasts the day.',
      size: '90ml',
      category: 'Men',
      sizes: ['90ml'], 
    },
    {
      id: 7,
      image: pr7,
      name: 'EROS FLAME',
      brand: 'EAU DE PARFUM',
      price: '37400',
      quantity: 4,
      description: 'A fragrance that strikes you right through the heart bearing an important message for new generations about the dignity of love and the power of diversity. Versace Eros Flame is a fragrance for a strong, Passionate, self-confident man who is deeply in touch with his emotions.',
      size: '60ml',
      category: 'Men',
      sizes: ['60ml'], 
    },
    {
      id: 8,
      image: pr8,
      name: 'DEFY',
      brand: 'EAU DE PARFUM',
      price: '17150',
      quantity: 5,
      description: 'Defy by Calvin Klein is a Woody Aromatic fragrance for men. This is a new fragrance. Defy was launched in 2021. Defy was created by Anne Flipo, Pascal Gaurin and Loc Dong. Top notes are Bergamot and Lavender; middle note is Vetiver; base note is Amber',
      size: '30ml',
      category: 'Men',
      sizes: ['30ml'], 
    },
  ];

  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  const getPrice = (price) => {
    const cleanedPrice = price.replace('LKR.', '').replace(/,/g, '').trim();
    const prices = cleanedPrice.split('–').map((str) => parseFloat(str.trim()));
    return prices.length === 2 ? { min: prices[0], max: prices[1] } : { min: 0, max: 0 };
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = category === 'All' || product.category === category;
    const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const { min, max } = getPrice(product.price);
    const isWithinPriceRange =
      (minPrice === '' || min >= parseFloat(minPrice)) && (maxPrice === '' || max <= parseFloat(maxPrice));
    return isCategoryMatch && isNameMatch && isWithinPriceRange;
  });



  return (
    <div className="productPage">
      <Navbar />
      <Search
        category={category}
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="productGrid">
        {filteredProducts.map((product) => (
          <div
            className="productCard"
            key={product.id}
            onClick={() => setSelectedProduct(product)} // Open modal with product details
          >
            <img src={product.image} alt={product.name} className="productImage" />
            <h3 className="productName">{product.name}</h3>
            <p className="productPrice">{product.brand}</p>
            <p className="productPrice">LKR {product.price}.00</p>
          </div>
        ))}
      </div>
      {/* Render ProductModal only when selectedProduct is not null */}
      {selectedProduct && (
        <ProductModel
          open={true}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          
        />
      )}
    </div>
  );
};

export default ProductPage;
