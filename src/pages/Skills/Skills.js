import './Skills.scss';
import Slider from "react-slick";
import ListBorderTop from "./../../components/Items/ListBorderTop"
import { useState } from 'react';
import Carrousel from './../../components/Carrousel/Carrousel';

import htmlImg from './../../assets/img/html-5.png'
import cssImg from './../../assets/img/css-3.png'
import jsImg from './../../assets/img/js.png'
import mysqlImg from './../../assets/img/mysql.png'
import phpImg from './../../assets/img/php.png'
import reactImg from './../../assets/img/reactjs.png'
import nodejsImg from './../../assets/img/nodejs.png'
import bootstrapImg from './../../assets/img/bootstrap.png'
import figmaImg from './../../assets/img/figma.png'
import wordpressImg from './../../assets/img/wordpress.png'
import sassImg from './../../assets/img/sass.png'
import vuejsImg from './../../assets/img/vuejs.png'

function Skills() {
  const knowleges = [
    {title:"DEVELOPPEMENT" , items : ["Creation des web app", "Developpement front-end", "Développement back-end"]},
    {title:"GRAPHIQUE DESIGN" , items : ["UI/UX", "Illustration", "DESIGN"]},
    {title:"PROJETS" , items : ["Site e-commerce", "Cinetic", "To-do-List..."]}
  ];

  const tools = [
    [{img: htmlImg, title: "HTML"},{img: cssImg, title: "CSS"},{img: jsImg, title: "JAVASCRIPT"},{img: phpImg, title: "PHP"},{img: reactImg, title: "REACTJS"},{img: nodejsImg, title: "NODEJS"},{img: bootstrapImg, title: "BOOTSTRAP"}],
    [{img: figmaImg, title: "FIGMA"},{img: mysqlImg, title: "MYSQL"},{img: wordpressImg, title: "WORDPRESS"},{img: sassImg, title: "SASS"},{img: vuejsImg, title: "VUEJS"}],
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
