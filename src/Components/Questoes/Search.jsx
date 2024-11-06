import React from 'react';
import styles from './Search.module.css';

const Search = ({ op }) => {
  const teste = ['ESA', 'PM', 'EEAR'];
  return (
    <div className={styles.customSelect}>
      <select>
        <option value=""></option>
        <option value={teste[0]}>{teste[0]}</option>
        <option value={teste[1]}>{teste[1]}</option>
        <option value={teste[2]}>{teste[2]}</option>
      </select>
    </div>
  );
};

export default Search;
