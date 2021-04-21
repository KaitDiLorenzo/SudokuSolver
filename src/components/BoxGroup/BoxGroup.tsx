import './BoxGroup.css';

import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from '../Box/Box';

const BoxGroup: FunctionComponent = () => (
  <div className="box-group">
    <Row>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
    </Row>
    <Row>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
    </Row>
  </div>
);

export default BoxGroup;
