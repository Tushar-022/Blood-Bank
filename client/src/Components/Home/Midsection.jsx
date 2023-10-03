import React from 'react';
import { Midsectionpics } from '../../constants/data';
import Cards_midsection from './Cards_midsection';

export default function Midsection() {
  return (
    <>
     <div style={{ display: 'flex',backgroundColor:'skyblue' }}>
      <div style={{margin:'40px'}}>
        {Midsectionpics.map(item => (
          <img key={item.id} src={item.url} alt={`img`} />
        ))}
      </div>
      <div style={{margin:'40px'}}>
        <Cards_midsection />
      </div>
    </div>
    </>
  );
}
