import React from 'react';

const BonusItem = (props) => {
  return (
    <div className='bonus-item-cover'>
      <span>
        <img src={props.bonus.cover} alt='Awesome Bonus Sountrack'></img>
      </span>
    </div>
  );
}

export default BonusItem;
