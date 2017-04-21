import React from 'react';

const CardControls = ({onPassButtonClick, onAddButtonClick }) => {
  return (
    <div className="CardControls">
      <button onClick={onAddButtonClick}>Join</button> | <button onClick={onPassButtonClick}>Pass</button>
    </div>
  )
}

export default CardControls;