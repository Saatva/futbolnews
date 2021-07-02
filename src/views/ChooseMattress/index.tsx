import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChooseMattressPresenter from './presenter';
import classicPicture from '../../assets/classic-carousel.jpeg';
import loomPicture from '../../assets/loom-carousel.jpeg';
import zenPicture from '../../assets/zen-carousel.jpeg';
import { MATTRESS_NAMES } from '../../constants';
import { Mattress } from '../../types';

interface Props {
  handleAddToCart: () => void;
}

const ChooseMattress = (props: Props) => {
  const { handleAddToCart } = props;
  const [mattresses, setMattresses] = useState([] as Mattress[]);
  const [selectedMattress, setSelectedMattress] = useState('Saatva Classic');
  const selections = mattresses.map((mattress: Mattress) => mattress.name);
  const mattressLabel = `${selectedMattress} Mattress`;
  const selectedMattressRating = mattresses.find(
    (mattress: Mattress) => mattress.name === selectedMattress,
  )?.reviewRating;

  useEffect(() => {
    axios
      .get('./mattresses.json')
      .then(({ data }) => {
        const mattressesArr: Mattress[] = Object.values(data.mattresses);
        setMattresses(mattressesArr);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const getSelectedMattressPicture = () => {
    switch (selectedMattress) {
      case MATTRESS_NAMES.CLASSIC:
        return classicPicture;
      case MATTRESS_NAMES.LOOM:
        return loomPicture;
      case MATTRESS_NAMES.ZEN:
        return zenPicture;
      default:
        return classicPicture;
    }
  };

  const getMattressPrice = () => {
    const rawMattressPrice = mattresses.find(
      (mattress: Mattress) => mattress.name === selectedMattress,
    )?.price;
    const formattedMattressPrice = rawMattressPrice
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `$${formattedMattressPrice}`;
  };

  const handleMattressSelection = (name: string) => {
    setSelectedMattress(name);
  };

  return (
    <ChooseMattressPresenter
      getMattressPrice={getMattressPrice}
      getSelectedMattressPicture={getSelectedMattressPicture}
      handleAddToCart={handleAddToCart}
      handleMattressSelection={handleMattressSelection}
      mattressLabel={mattressLabel}
      selectedMattressRating={selectedMattressRating}
      selectedMattress={selectedMattress}
      selections={selections}
    />
  );
};

export default ChooseMattress;
