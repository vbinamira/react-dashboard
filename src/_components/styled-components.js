import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Nav = styled.nav``;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white!important;
    `};
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0 , 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

export const Label = styled.h3`
  font-size: 1.2em;
  font-family: sans-serif;
  letter-spacing: .2em;
  color: #000;
`;

export const Wrapper = styled.section`
  padding: 4em;
`;