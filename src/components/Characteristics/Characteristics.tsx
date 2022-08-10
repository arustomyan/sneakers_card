import React from 'react';
import { Root } from '../../model/obj';
import styles from './Characteristics.module.css';

interface CharacteristicsProps {
  characteristics: Root;
}

function Characteristics({ characteristics }: CharacteristicsProps) {
  return (
    <table className={styles.root}>
      {characteristics.map((item) => (
        <tr>
          <th>{item.characteristic}</th>
          <td>{item.value}</td>
        </tr>
      ))}
    </table>
  );
}

export default Characteristics;
