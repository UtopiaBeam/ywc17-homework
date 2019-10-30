import React from 'react';
import Button from 'react-bootstrap/Button';
import './Register.scss';

interface Props {
  duration: string;
}

export default ({ duration }: Props) => {
  return (
    <>
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
    </>
  );
};
