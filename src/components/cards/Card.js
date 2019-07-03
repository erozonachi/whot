import React from 'react';
import { GameCard, SmallSize, NormalSize, Cross, } from './StyledComponents';

function Card(props) {
  return (
    <GameCard>
      <SmallSize>
        <Cross />
        <h3>5</h3>
      </SmallSize>
      <NormalSize>
        <Cross />
      </NormalSize>
      <SmallSize>
        <Cross />
        <h3>5</h3>
      </SmallSize>
    </GameCard>
  );
}

export default Card;
