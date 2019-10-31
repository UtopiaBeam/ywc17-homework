import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_URL } from '../const';
import './Footer1.scss';

export default () => {
  return (
    <div className="footer-1 justify-content-center">
      <Row className="footer-1-wrapper">
        <Col sm={12} md={3}>
          <img alt="footer" src={`${BASE_URL}/img/logo/footer.png`} />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="footer-1-head">ข้อมูลลงทะเบียนประชาชน</div>
          <div>
            การรับสิทธิ การใช้งานแอปพลิเคชั่น <span className="nowrap">“เป๋าตัง”</span> และ{' '}
            <span className="nowrap">“ถุงเงิน”</span>
          </div>
          <div>
            ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.
            <a className="ml-1" href="tel:021111144">
              <span className="nowrap">0 2111 1144</span>
            </a>
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="footer-1-head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
          <div>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
          <div>
            ติดต่อ โทร.
            <a className="ml-1" href="tel:022706400">
              <span className="nowrap">0 2270 6400 กด 7</span>
            </a>
          </div>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <div className="footer-1-head">ข้อมูลเที่ยวชิมช้อปใช้</div>
          <div>ติดต่อ ททท.</div>
          <div>
            โทร
            <a className="ml-1" href="tel:1672">
              <span>1672</span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
