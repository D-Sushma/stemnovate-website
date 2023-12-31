import React from 'react';
import { baseUrlProduct } from '~/repositories/Repository';

const StrapiProductImage = ({ url, alt = 'image' }) => {
    return <img src={`${baseUrlProduct}${url}`} alt={alt} />;
};

export default StrapiProductImage;
