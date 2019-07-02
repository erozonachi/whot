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
