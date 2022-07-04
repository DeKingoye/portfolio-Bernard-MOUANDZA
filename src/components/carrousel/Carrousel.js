import './Carrousel.scss';
import { useState } from 'react';

function Carrousel(props) {

  return (
    <div className="carrousel">
        {
          props.list.map((section, i) => 
            <section key={i}>
              {
                section.map((item, j)=>
                  <div className='carrousel-track'>
                    <div className="carrousel-slide" key={j} title={item.title}>
                      <img src={item.img}/>
                    </div> 

                  </div> 
                )
              }
            </section>
          )
        }
    </div>
  );
}

export default Carrousel;