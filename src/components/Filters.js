import React from 'react';
import styles from './Filters.module.sass';
import Rating from './filters/Rating';
import Cuisine from './filters/Cuisine';
import DelivaryTime from './filters/DelivaryTime';

const Filters = props => {
  return (
    <div id={styles['filterContainer']}>
      <Cuisine />
      <Rating />
      <DelivaryTime />
    </div>
  );
};

export default Filters;
