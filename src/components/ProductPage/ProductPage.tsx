/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import ReactStars from 'react-stars';
import ProductRadioGroup from '../ProductRadio/ProductRadio';
import './ProductPage.scss';

interface ProductPageProps {
  pageTitle: string;
  imagePath: string;
  optionsTitle: string;
  productOptions: Array<string>;
  onOptionChange: (index: number) => void;
  optionIndex: number;
  optionTitle: string;
  optionPrice: number;
  optionRating: number;
  onPurchase: () => void;
  buttonTitle: string;
}

const ProductPage = (props: ProductPageProps) => {
  const {
    pageTitle, imagePath, optionsTitle, onOptionChange,
    productOptions, optionIndex, optionTitle, optionRating,
    optionPrice, onPurchase, buttonTitle,
  } = props;

  return (
    <main className="product-page">
      <div className="product-page__col1">
        <span className="product-page__col1__title">{pageTitle}</span>
        <img src={require(`../../assets/${imagePath}`).default} className="product-page__col1__img" alt="mattress" />
      </div>
      <div className="product-page__col2">
        <span className="product-page__col2__title">{pageTitle}</span>
        <div className="product-page__col2__picker">
          <ProductRadioGroup
            title={optionsTitle}
            options={productOptions}
            selected={optionIndex}
            onChange={(index) => onOptionChange(index)}
          />
        </div>
        <div className="product-page__col2__info">
          <b>
            {optionTitle}
          </b>
          <span>
            $
            {optionPrice.toLocaleString()}
          </span>
        </div>
        <div className="product-page__col2__rating">
          <ReactStars
            count={5}
            value={optionRating}
            edit={false}
            color2="#e2c492"
            size={20}
          />
          <span className="product-page__col2__rating__text">
            (
            {optionRating}
            {' '}
            out of 5)
          </span>
        </div>
        <button className="product-page__col2__button" type="button" onClick={onPurchase}>
          {buttonTitle}
        </button>
      </div>
    </main>
  );
};

export default ProductPage;
