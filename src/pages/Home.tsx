import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to='/product?article=34934934'>Первый</Link>
    </div>
  );
}

export default Home;
