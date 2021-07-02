import React from 'react';

import Button from '../Button';

import './styles.scss';

interface Props {
  handleMattressSelection: (name: string) => void;
  selectedMattress: string;
  selections: string[];
}

const SelectionBar = (props: Props) => {
  const { handleMattressSelection, selectedMattress, selections } = props;

  const renderButtons = () =>
    selections.map((selection: string) => (
      <Button
        key={selection}
        isSelectButton
        isSelected={selection === selectedMattress}
        onClick={() => handleMattressSelection(selection)}
        text={selection}
      />
    ));

  return <div className="selection-bar-container">{renderButtons()}</div>;
};

export default SelectionBar;
