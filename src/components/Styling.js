import React from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';

const Styling = () => {
  return (
    <div>
      <h1>Styling</h1>

      <Button color="primary">Default button</Button>


     <UncontrolledAlert color="info">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>

    </div>
  )
}

export default Styling;
