import React from 'react';
import { PanjsData } from '../services';
import Register from './Register';
import Detail from './Detail';
import Link from './Link';
import './Content.scss';

interface Props {
  data: PanjsData;
}

export default ({ data }: Props) => {
  return (
    <div className="py-4 wrapper">
      <Register duration={data.duration} />
      <Detail data={data} />
      <Link />
    </div>
  );
};
