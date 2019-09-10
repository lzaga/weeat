import React from 'react';
import styles from './Filters.module.sass';
import Rating from './filters/Rating';
import Cuisine from './filters/Cuisine';
import DeliveryTime from './filters/DeliveryTime';

const Filters = props => {
  return (
    <div id={styles.filterContainer}>
      <Cuisine />
      <Rating />
      <DeliveryTime />
    </div>
  );
};

export default Filters;
