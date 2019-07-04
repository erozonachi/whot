import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  color: #200122;
  z-index: 999;
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
    padding: 0 .25em;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }
  > button {
    font-size: 2.0rem;
    font-family: 'El Messiri', sans-serif;
    outline: none;
    background: inherit;
    color: inherit;
    padding: .25em;
    border: 1px solid #ddd;
    border-radius: .25em;
    position: absolute;
    right: 0;
    margin: 0 .25em;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  background: transparent;
  color: #200122;
  font-family: 'El Messiri', sans-serif;
  z-index: 999;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    color: inherit;
    text-decoration: none;
    &:link, &:visited {
      color: inherit;
    }
    > strong {
      font-weight: bold;
      display: none;
    }
  }
  &:hover {
    background: #200122;
    background: -webkit-linear-gradient(to right, #6f0000, #200122);
    background: linear-gradient(to right, #6f0000, #200122);
    color: #ddd;
    > a {
      > strong {
        display: inline;
      }
    }
  }
`;
