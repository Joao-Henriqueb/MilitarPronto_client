import React from 'react';
import styles from './SelectField.module.css';

function SelectField({ options, value, onChange, enabled }) {
  return (
    <div className={styles.customSelect}>
      <select disabled={!enabled} value={value} onChange={onChange}>
        <option value="">Selecione uma opção</option>
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectField;
