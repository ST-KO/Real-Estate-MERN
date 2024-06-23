import React from 'react';
import './list.scss';
import Card from '../card/Card';

const List = ({posts}) => {
  return (
    <section className='list'>
        {
            posts.map(item => (
                <Card key={item.id} item={item}/>
            ))
        }
    </section>
  );
};

export default List;