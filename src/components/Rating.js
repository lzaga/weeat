import React from 'react';
import styles from './Rating.module.sass';

const Rating = ({ rating }) => {
  const stars = [];
  Array.from({ length: rating }, (v, index) =>
    stars.push(<i className="star icon" key={index} />),
  );

  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
