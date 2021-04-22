import './Box.css';

import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { Form } from 'react-bootstrap';

const Box: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (
      input === '' ||
      (input.length === 1 &&
        input.charCodeAt(0) > 48 &&
        input.charCodeAt(0) < 58)
    ) {
      setInputValue(input);
    } else if (
      input.length === 2 &&
      input.charCodeAt(1) > 48 &&
      input.charCodeAt(1) < 58
    ) {
      setInputValue(
        input.charAt(0) === inputValue ? input.charAt(1) : input.charAt(0)
      );
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
