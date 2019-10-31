import React from 'react';
import './Footer2.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => {
  return (
    <div className="footer-2">
      <Row className="footer-2-wrapper">
        <Col sm={12} md={3} lg={3} className="copyright">
          Copyright © 2003-2019
        </Col>
        <Col sm={4} md={3} lg={3} className="footer-2-item">
          <a
            href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ลงทะเบียนเข้าร่วมมาตรการ
          </a>
        </Col>
        <Col sm={4} md={3} lg={3} className="footer-2-item">
          <a
            href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register"
            target="_blank"
            rel="noopener noreferrer"
          >
            ขั้นตอนการเข้าร่วมทั้งหมด
          </a>
        </Col>
        <Col sm={4} md={3} lg={3} className="footer-2-item">
          <a
            href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province"
            target="_blank"
            rel="noopener noreferrer"
          >
            รายชื่อร้านค้าที่เข้าร่วมรายการ
          </a>
        </Col>
      </Row>
    </div>
  );
};
