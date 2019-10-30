import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_URL } from '../const';
import './Link.scss';

export default () => {
  return (
    <div id="link-wrapper">
      <Row className="tat-wrapper">
        <Col md={4} xs={12}>
          <a href="tel:021111144">
            <img alt="KTB" src={`${BASE_URL}/img/Banner_KTB_SQ.png`} />
          </a>
        </Col>
        <Col md={4} xs={12}>
          <a href="tel:022706400">
            <img alt="CGD" src={`${BASE_URL}/img/Banner_CGD_Sq.png`} />
          </a>
        </Col>
        <Col md={4} xs={12}>
          <a href="tel:1672">
            <img alt="TAT" src={`${BASE_URL}/img/Banner_TAT_Hotline_Sq.png`} />
          </a>
        </Col>
      </Row>
      <Row className="ktc-wrapper">
        <Col md={2} xs={4}>
          <a href="https://www.mof.go.th/th/home" target="_blank" rel="noopener noreferrer">
            <img alt="MOF" src={`${BASE_URL}/img/brand-logo/MOF.png`} />
          </a>
        </Col>
        <Col md={2} xs={4}>
          <a href="http://www.fpo.go.th" target="_blank" rel="noopener noreferrer">
            <img alt="FPO" src={`${BASE_URL}/img/brand-logo/FPO.png`} />
          </a>
        </Col>
        <Col md={2} xs={4}>
          <a href="https://www.cgd.go.th" target="_blank" rel="noopener noreferrer">
            <img alt="MOF" src={`${BASE_URL}/img/brand-logo/CGD.png`} />
          </a>
        </Col>
        <Col md={2} xs={4}>
          <a href="https://www.newcb.ktb.co.th" target="_blank" rel="noopener noreferrer">
            <img alt="MOF" src={`${BASE_URL}/img/brand-logo/Krungthai.png`} />
          </a>
        </Col>
        <Col md={2} xs={4}>
          <a href="https://www.mots.go.th" target="_blank" rel="noopener noreferrer">
            <img alt="MOF" src={`${BASE_URL}/img/brand-logo/MOTS.png`} />
          </a>
        </Col>
        <Col md={2} xs={4}>
          <a href="https://thai.tourismthailand.org" target="_blank" rel="noopener noreferrer">
            <img alt="MOF" src={`${BASE_URL}/img/brand-logo/TAT.png`} />
          </a>
        </Col>
      </Row>
    </div>
  );
};
