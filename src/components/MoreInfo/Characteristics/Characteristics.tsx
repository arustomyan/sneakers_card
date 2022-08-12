import React from 'react';
import styles from './Characteristics.module.css';
import { Characteristic } from '../../../model/product';

interface CharacteristicsProps {
  characteristics: Characteristic[];
}

function Characteristics({ characteristics }: CharacteristicsProps) {
  return (
    <table className={styles.root}>
      <tbody>
        {characteristics.map((item) => (
          <tr key={item.characteristic}>
            <th>{item.characteristic}</th>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Characteristics;
