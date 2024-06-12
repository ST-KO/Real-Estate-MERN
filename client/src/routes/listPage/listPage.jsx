import React from 'react';
import './listPage.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';

const ListPage = () => {
  
  const data = listData;
  
  return (
    <section className='listPage'>
      <div className='listContainer'>
        <div className="wrapper">
          <Filter />
          {
            data.map(item => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </section>
  );
};

export default ListPage;