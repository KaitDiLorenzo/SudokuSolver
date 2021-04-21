import './Box.css';

import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { Form } from 'react-bootstrap';

const Box: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState(' ');

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (
      input === '' ||
      (input.length === 1 &&
        input.charCodeAt(0) > 48 &&
        input.charCodeAt(0) < 58)
    ) {
      setInputValue(e.target.value);
    } else if (
      input.length === 2 &&
      input.charCodeAt(1) > 48 &&
      input.charCodeAt(1) < 58
    ) {
      setInputValue(input.charAt(1));
    }
  };

  return (
    <Form.Control
      onChange={(e: ChangeEvent<HTMLInputElement>) => validateInput(e)}
      value={inputValue}
    />
  );
};

export default Box;
