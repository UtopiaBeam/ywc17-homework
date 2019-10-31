import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { PanjsData, getPanjsData } from './services';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from './components/Footer';

export default () => {
  const [data, setData] = useState<PanjsData>();

  useEffect(() => {
    getPanjsData().then(data => {
      setData(data);
    });
  }, []);

  return data ? (
    <>
      <Header items={data.navbarItems} />
      <Content data={data} />
      <Footer />
    </>
  ) : null;
};
