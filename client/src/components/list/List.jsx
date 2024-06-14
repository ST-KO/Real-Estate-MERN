import React from 'react';
import './list.scss';
import { listData } from '../../lib/dummyData';
import Card from '../card/Card';

const List = () => {
  return (
    <section className='list'>
        {
            listData.map(item => (
                <Card key={item.id} item={item}/>
            ))
        }
    </section>
  );
};

export default List;