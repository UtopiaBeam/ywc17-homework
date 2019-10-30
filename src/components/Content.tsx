import React from 'react';
import { PanjsData } from '../services';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Content.scss';

interface Props {
  data: PanjsData;
}

export default ({ data: { duration, detail, condition } }: Props) => {
  return (
    <div className="py-4 wrapper">
      <div id="since">ตั้งแต่วันที่</div>
      <div id="date">{duration}</div>
      <div className="justify-content-center">
        <Button id="button">
          ลงทะเบียนเฟส 2<br />
          ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.
          <br />
          (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
        </Button>
        <hr />
      </div>
      <Container id="detail-wrapper">
        <div id="detail-title">
          มาตรการส่งเสริมการบริโภค
          <br />
          ในประเทศ <span className="nowrap">"ชิมช้อปใช้"</span>
        </div>
        <div className="detail-content my-4" dangerouslySetInnerHTML={{ __html: detail }} />
        <div>
          <div id="condition-title">เงื่อนไขการเข้าร่วมมาตรการ</div>
          <div className="detail-content mt-2" dangerouslySetInnerHTML={{ __html: condition }} />
        </div>
      </Container>
      <Row id="nav-wrapper">
        <Col className="col-md-4 col-sm-12">
          <a href="tel:021111144">
            <img alt="KTB" src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png" />
          </a>
        </Col>
        <Col className="col-md-4 col-sm-12">
          <a href="tel:022706400">
            <img alt="CGD" src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png" />
          </a>
        </Col>
        <Col className="col-md-4 col-sm-12">
          <a href="tel:1672">
            <img
              alt="TAT"
              src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};
