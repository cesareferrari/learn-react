import React from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import StyledButton from './styled/StyledButton';
import styled from 'styled-components';

const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`


const Styling = () => {
  return (
    <div>

      <h2>Styled components styling</h2>

      <StyledButton>Styled component button</StyledButton>
      <StyledButton primary>Styled component primary button</StyledButton>

      <TomatoButton>Tomato button</TomatoButton>





      <h2>Reactstrap Styling</h2>

      <Button color="primary">Default button</Button>


     <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>

    </div>
  )
}

export default Styling;
