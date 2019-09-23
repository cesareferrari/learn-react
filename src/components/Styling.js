import React from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: gray;
  border: 1px solid black;
  padding: 4px 10px;
  color: white;
  border-radius: 6px;
`

const Styling = () => {
  return (
    <div>

      <h2>Styled components styling</h2>

      <StyledButton>Styled component button</StyledButton>





      <h2>Reactstrap Styling</h2>

      <Button color="primary">Default button</Button>


     <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>

    </div>
  )
}

export default Styling;
