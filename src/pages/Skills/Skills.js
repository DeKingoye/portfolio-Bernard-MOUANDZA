import './Skills.scss';
import Slider from "react-slick";
import ListBorderTop from "./../../components/Items/ListBorderTop"
import { useState } from 'react';
import Carrousel from './../../components/Carrousel/Carrousel';

import htmlImg from './../../assets/img/html-5.png'

function Skills() {
  const knowleges = [
    {title:"DEVELOPPEMENT" , items : ["Creation des web app", "Developpement front-end", "Développement back-end"]},
    {title:"GRAPHIQUE DESIGN" , items : ["UI/UX", "Illustration", "DESIGN"]},
    {title:"PROJETS" , items : ["javascript", "ReactJs VueJs TypeJs", "mysql Php MongoDB"]}
  ];

  const tools = [
    [{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"}],
    [{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"},{img: htmlImg, title: "HTML"}],
  ]

  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function next() {
    slider.slickNext();
  }
  function previous() {
    slider.slickPrev();
  }



  return (
    <div className='skills'>
      <h1>compétences</h1>

      <div className="mt-5 knowleges">
        <div className="knowleges__desktop">
          {
            knowleges.map((list, i)=>(
              <ListBorderTop list={list.items} title={list.title} key={i} />
            ))
          }
        </div>
        <Slider {...settings} ref={c => {setSlider(c)}}>
          {
            knowleges.map((list, i)=>(
              <ListBorderTop list={list.items} title={list.title} key={i} />
            ))
          }
        </Slider>
        <div className="chevrons">
          <button className="button" onClick={previous}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="button" onClick={next}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="mt-5 tools">
        <h1>outils & technologies</h1>
        <Carrousel list={tools} />
      </div>
    </div>
    
  );
}

export default Skills;
