import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: transparent;
  color: #200122;
  &:hover {
    background: #200122;
    background: -webkit-linear-gradient(to right, #6f0000, #200122);
    background: linear-gradient(to right, #6f0000, #200122);
    color: #ddd;
  }
  > h1 {
    font-size: 2.8rem;
    font-weight: bold;
    font-family: 'Monoton', cursive;
    text-align: center;
    border-right: .5em solid #ddd;
    border-left: .5em solid #ddd;
  }
  > button {
    font-size: 2.0rem;
    font-family: 'El Messiri', sans-serif;
    outline: none;
    border: .25em solid #ddd;
    border-radius: .5em;
    position: absolute;
    right: 0;
    margin: 0 .25em;
  }
`;
