import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.scss';
import Slider from "react-slick";
import ListBorderTop from "./../../components/Items/ListBorderTop"
import { useState } from "react";

function About() {
  const [slider, setSlider] = useState(null);

  const qualities = [
    ["Rigoureux", "Ambitieux", "Compétent"],
    ["Curieux", "Autonome", "Sympa"],
    ["Travail en équipe", "Apporte des solutions", "Gestion de projets"]
  ];

  const contacts = [
    {title: "email", label: "yannmouandza3@gmail.com"},
    {title: "role", label: "développeur web fullStack"},
    {title: "téléphone", label: "+33763443742"},
  ]


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
    <section className="about bg-red mt-4">
      <div className="row desc">
        <div className="col-sm-5 col-12 container__profile"></div>
        <div className="col-sm-7 col-12 container__quality">
          <p className="text-justify">
          hJe suis à la recherche d'une alternance
          dès le mois de septembre pour mes deux ans en MASTERE CTO et TECH Lead à HETIC.
          Mon objectif à terme est de devenir 
          un expert en développement, capable de participer à toutes 
          les étapes du cycle de vie d’un projet.
          </p>

          <div className="mt-1 quality">
            <h2>Qualités</h2>
            <div className="quality__desktop">
              {
                qualities.map((list, i)=>(
                  <ListBorderTop list={list} key={i} />
                ))
              }
            </div>
            <Slider {...settings} ref={c => {setSlider(c)}}>
              {
                qualities.map((list, i)=>(
                  <ListBorderTop list={list} key={i} />
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

          <div className="contacts">
            {
                contacts.map((item, i)=>(
                    <div key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.label}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
