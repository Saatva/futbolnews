import React from 'react';

import Button from '../../components/Input/Button';
import { TEXT } from '../../constants';
import SelectionBar from '../../components/Input/SelectionBar';
import StarRating from '../../components/StarRating';

import './styles.scss';

interface Props {
  getMattressPrice: () => string;
  getSelectedMattressPicture: () => string;
  handleAddToCart: () => void;
  handleMattressSelection: (name: string) => void;
  mattressLabel: string;
  selectedMattress: string;
  selectedMattressRating: number | undefined;
  selections: string[];
}

const ChooseMattressPresenter = (props: Props) => {
  const {
    getMattressPrice,
    getSelectedMattressPicture,
    handleAddToCart,
    handleMattressSelection,
    mattressLabel,
    selectedMattress,
    selectedMattressRating,
    selections,
  } = props;

  return (
    <div className="choose-container">
      <div className="choose-title top-title">{TEXT.TITLE}</div>
      <img
        className="choose-image-container position-cropped-image"
        src={getSelectedMattressPicture()}
        alt={selectedMattress}
      />
      <div className="choose-selection-container">
        <div className="choose-title bottom-title">{TEXT.TITLE}</div>
        <div className="select-text">{TEXT.SELECT_MATTRESS}</div>
        <SelectionBar
          handleMattressSelection={handleMattressSelection}
          selectedMattress={selectedMattress}
          selections={selections}
        />
        <div className="mattress-price-container">
          <div>{mattressLabel}</div>
          <div>{getMattressPrice()}</div>
        </div>
        <StarRating rating={selectedMattressRating} />
        <Button onClick={handleAddToCart} text={TEXT.ADD} />
      </div>
    </div>
  );
};

export default ChooseMattressPresenter;
