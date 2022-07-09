import './Slider.scss';
import { useEffect, useState } from 'react';

const Card = (props) => {
    return (
      <li className="card">
        <a href={props.link} target="_blank">
            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
        </a>
      </li>
    )
}
  
function Slider(props) {
    const {items} = props;
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])

    const handleAnimationEnd = () => {
        if(moveClass === 'prev'){
          shiftNext([...carouselItems]);
        }else if(moveClass === 'next'){
          shiftPrev([...carouselItems]);
        }
        setMoveClass('')
    }

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }
      
    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }
      
    return (
        <div className="sliderwrapper module-wrapper">
            <button onClick={() => setMoveClass('next')} className="prev">
                <span className="material-icons">chevron_left</span>
            </button>
            <button onClick={() => setMoveClass('prev')} className="next">
                <span className="material-icons">chevron_right</span>
            </button>
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} slider`}>
                {carouselItems.map((t, index) => 
                    <Card key={t.title + index} image={t.image}  link={t.link} title={t.title} />
                )}
            </ul>
        </div>
    );
}

export default Slider;