import './Items.scss';
import { useState } from 'react';

function ListBorderTop(props) {

  return (
    <div className="list">
      {props.title && <h3>{props.title}</h3>}
      <ul className="border-top">
          {
              props.list.map((item, i)=>(
                  <li key={i}>{item}</li>
              ))
          }
      </ul>
    </div>
  );
}

export default ListBorderTop;