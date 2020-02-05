import React from 'react';
import api from '../../services/api';
import CustomImage from '../../components/CustomImage';

const Main = () => (
  <>
    <CustomImage src={require('../../assets/isabele.jpeg')} />
    <CustomImage src={require('../../assets/natali.jpg')} />
  </>
);

export default Main;


