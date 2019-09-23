// import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid palevioletred;
  padding: 4px 10px;
  border-radius: 6px;
  display: inline-block;
  margin: 1rem;

  &:hover {
    background-color: #9c274e;
    color: white;
  }

  ${ props => 
      props.primary && 
      css`
        background: palevioletred;
        color: white;
      `
  }
`

export default StyledButton;
