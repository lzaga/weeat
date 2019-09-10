import React from 'react';
import { cuisines } from './cuisines';

const DropdownSelect = props => {
  const { input, label, meta } = props;
  const renderOptions = cuisine => {
    return (
      <option key={cuisine} value={cuisine}>
        {cuisine}
      </option>
    );
  };

  return (
    <div
      className={`field ${meta.error && meta.touched ? 'error' : ''}`}
    >
      <label>{label}</label>
      <select {...input} options={cuisines} className="ui dropdown">
        <option value="">Select Cuisine</option>
        {cuisines.map(cuisine => renderOptions(cuisine))}
      </select>
    </div>
  );
};

export default DropdownSelect;
