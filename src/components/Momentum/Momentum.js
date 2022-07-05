import './Momentum.scss';
import { useEffect, useState } from 'react';
import useScript from './useScript';

function Momentum(props) {
    useScript("https://rawgit.com/lmgonzalves/momentum-slider/master/dist/momentum-slider.min.js");
    useScript("../../../public/momentum.js");

  return (
    <div className="sliders-container">
        <ul className="pagination">
            <li className="pagination__item"><a className="pagination__button"></a></li>
            <li className="pagination__item"><a className="pagination__button"></a></li>
            <li className="pagination__item"><a className="pagination__button"></a></li>
            <li className="pagination__item"><a className="pagination__button"></a></li>
        </ul>
    </div>
  );
}

export default Momentum;