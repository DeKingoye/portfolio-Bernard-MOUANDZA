import Slider from './../../components/Carrousel/Slider';
import './Projects.scss';

function Projects() {
  const items = [
    {
      title:"TO-DO-LIST",
      image:'https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?b=1&k=20&m=1285308242&s=170667a&w=0&h=K-UO77yYEQAKjRNLhgXADlyRIqrPkB8sC-4mKcyMgC4=',
      link: "https://to-do-list-hetic.netlify.app/"
    },
    {
      title:"CINETIC",
      image:'https://img-19.commentcamarche.net/Z9e4GjGDv9VdlRndhmvEqFsbk3Y=/480x270/smart/6246fc94bad94dda9c611a1fdc87dd76/ccmcms-commentcamarche/23887428.jpg',
      link: "http://cinetic.epizy.com/?p=sign-in"
    },
    {
      title:"FACE",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"KOY",
      image:'https://www.culture-nutrition.com/wp-content/uploads/2019/04/sante-publique-programme.jpg',
      link: "https://dekingoyebaby.netlify.app/"
    },
    {
      title:"CALCULATRICE",
      image:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F08.2F10.2F5aeb6c6e-fdc1-44cd-8cb3-afbde82c28c4.2Ejpeg/1200x1200/quality/80/crop-from/center/tout-savoir-sur-la-calculatrice.jpeg',
      link: "#"
    },
    {
      title:"face",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"face",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"face",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"face",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"face",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    }
  ];

  return (
    <div className='projets'>
      <h1>Réalisations</h1>
      <div>
        <Slider items={items} />
      </div>
    </div>
  );
}

export default Projects;
