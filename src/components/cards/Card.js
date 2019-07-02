import React from 'react';
import { GameCard, SmallSize, NormalSize, Cross, } from './StyledComponents';

export default function Card(props) {
  return (
    <GameCard>
      <SmallSize>
        <Cross />
        <h4>5</h4>
      </SmallSize>
      <NormalSize />
      <SmallSize>
        <Cross />
        <h4>5</h4>
      </SmallSize>
    </GameCard>
  );
}
