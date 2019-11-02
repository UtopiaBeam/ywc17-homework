import React from 'react';
import { PanjsData } from '../services';
import Container from 'react-bootstrap/Container';
import createDOMPurify from 'dompurify';
import './Detail.scss';

interface Props {
  data: PanjsData;
}

export default ({ data }: Props) => {
  const DOMPurify = createDOMPurify(window);

  return (
    <>
      <Container id="detail-wrapper">
        <div id="detail-title">
          มาตรการส่งเสริมการบริโภค
          <br />
          ในประเทศ <span className="nowrap">"ชิมช้อปใช้"</span>
        </div>
        <div
          className="content my-4"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.detail) }}
        />
        <div>
          <div id="condition-title">เงื่อนไขการเข้าร่วมมาตรการ</div>
          <div
            className="content mt-2"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.condition) }}
          />
        </div>
      </Container>
    </>
  );
};
