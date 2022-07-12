import Slider from './../../components/Carrousel/Slider';
import './Projects.scss';

function Projects() {
  const items = [
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
