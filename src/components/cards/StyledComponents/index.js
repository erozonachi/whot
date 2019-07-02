import styled from 'styled-components';

export const Circle = styled.div`
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  width: ${props.small? '30px' : '80%'};
`;

export const Triangle = styled.div`
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

export const Cross = styled.div`
  -webkit-clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
  clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
`;

export const Square = styled.div`
  -webkit-clip-path: inset(10% 10% 10% 10%);
  clip-path: inset(10% 10% 10% 10%);
`;

export const Star = styled.div`
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

export const NormalSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #200122;
  > div {
    background: #200122;
    background: -webkit-linear-gradient(to right, #6f0000, #200122);
    background: linear-gradient(to right, #6f0000, #200122);
    width:80%;
    height: width;
  }
`;

export const SmallSize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  position: absolute;
  color: #200122;
  > div {
    background: #200122;
    background: -webkit-linear-gradient(to right, #6f0000, #200122);
    background: linear-gradient(to right, #6f0000, #200122);
    width: 30px;
    height: width;
  }
`;

export const GameCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 80%;
  padding: 25px 0;
  position: relative;
  > div {
    &:first-of-type {
      top: 0;
      left: 0;
    }
    &:last-of-type {
      bottom: 0;
      right: 0;
    }
  }
`;
