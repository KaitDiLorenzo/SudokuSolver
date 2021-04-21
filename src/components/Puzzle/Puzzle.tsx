import './Puzzle.css';

import React, { FunctionComponent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BoxGroup from '../BoxGroup/BoxGroup';

const Puzzle: FunctionComponent = () => (
  <Container className="puzzle">
    <Row>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
    </Row>
    <Row>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
    </Row>
    <Row>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
      <Col>
        <BoxGroup />
      </Col>
    </Row>
  </Container>
);

export default Puzzle;
