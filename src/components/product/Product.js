import React from 'react';
import { useMattressesContext } from '../../context/mattressesContext';
import { ReactComponent as DeleteIcon } from './../../images/delete.svg';

const Product = ({ product }) => {
    const { removeProduct } = useMattressesContext();

    return (
        <li>
            <img src={require(`./../../images/${product.imageFileName}`).default} alt="product"/>
            <div className="d-flex copy">
                <p>{product.name} x {product.quantity}</p>
                <p className="price"> <strong>${product.price.toFixed(2)}</strong></p>
                <button onClick={() => removeProduct(product.type)} className="btn btn-danger"><DeleteIcon/></button>
            </div>
        </li>
    );
}

export default Product;
