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
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"FACE",
      image:'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      link: "#"
    },
    {
      title:"TINKUY",
      image:'https://www.culture-nutrition.com/wp-content/uploads/2019/04/sante-publique-programme.jpg',
      link: "https://dekingoyebaby.netlify.app/"
    },
    {
      title:"CALCULATRICE",
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
