import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Banner.scss';

export default () => {
  return (
    <>
      <Row id="banner">
        <Col id="left-banner" />
        <Col id="center-banner">
          <img
            alt="banner"
            src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"
            width={110}
            height={131}
          />
        </Col>
        <Col id="right-banner" />
      </Row>
    </>
  );
};
