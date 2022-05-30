import { Link } from 'react-router-dom';
import './Navbar.scss';
import {Routes} from '../../routes'

function Navbar() {
    const menu=[
        {
            to: Routes.Home.path, 
            name: 'Accueil'
        }, 
        {
            to: Routes.About.path, 
            name: 'A propos'
        }, 
        {
            to: Routes.Skills.path, 
            name: 'Compétences'
        }, 
        {
            to: Routes.Projects.path, 
            name: 'Projets'
        }, 
    ]

  return (
    <nav>
        <ul>
            {
                menu.map((item, i)=>(
                    <li>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>

    </nav>
  );
}

export default Navbar;