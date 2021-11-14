import React from 'react';
import PropTypes from 'prop-types';
//import defaultImage from '../../../assets/default-image.jpeg';
const defaultImage = 'https://www.w3schools.com/images/colorpicker.gif';

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      {/* <h4>single product</h4> */}
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>$ {price || 999.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps ={
//   image: defaultImage,
//   name: 'default name',
//   price: 99.99
// }

export default Product;
