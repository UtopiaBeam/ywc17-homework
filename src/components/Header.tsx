import React from 'react';
import Navbar from './Navbar';
import { NavbarItem } from '../services';
import Banner from './Banner';

interface Props {
  items: NavbarItem[];
}

export default ({ items }: Props) => {
  return (
    <>
      <Navbar items={items} />
      <Banner />
    </>
  );
};
