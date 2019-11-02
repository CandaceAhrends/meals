
import React from 'react';

/*
   items: [
       { label: 'a', data: 'data'},
      { label: 'b', data: 'bbb'},
   ];
*/
const Row = ({row})=>row.map( (item,i)=><span key={i}>{item}</span>);

const List = ({rows})=>rows.map( (row,i)=><li key={i}><i className="material-icons"> person </i><Row row={Object.values(row)}></Row></li>);

export default List;