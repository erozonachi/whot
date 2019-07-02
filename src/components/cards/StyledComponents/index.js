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
