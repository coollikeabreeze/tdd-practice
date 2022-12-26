import React, { useState } from 'react';
import {
  Form,
  Button,
  Popover,
  OverlayTrigger,
  Overlay,
} from 'react-bootstrap';

const SummaryForm = React.memo(() => {
  const [termsChecked, setTermsChecked] = useState(false);
  const handleTermsMouseOver = () => {};
  const handleTermsMouseOut = () => {};

  const handleClick = () => {
    setTermsChecked(!termsChecked);
  };

  const popover = (
    <Popover>
      <Popover.Header as="h3">Terms and Conditions</Popover.Header>
      <Popover.Body>Popover Content</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <OverlayTrigger trigger={'hover'} overlay={popover}>
      <span>
        I agree to
        <span style={{ color: 'blue' }}> Terms and Conditions </span>
      </span>
    </OverlayTrigger>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          name="termsCheckbox"
          checked={termsChecked}
          onMouseOver={handleTermsMouseOver}
          onMouseOut={handleTermsMouseOut}
          onChange={handleClick}
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        name="confirmButton"
        disabled={!termsChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
});

export default SummaryForm;
