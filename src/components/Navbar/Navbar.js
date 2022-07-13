import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import imgMenu from "./../../assets/img/menu.svg";
import { useState } from 'react';

function Navbar(props) {
    const location = useLocation();
    const locationKey = location.pathname;

    const [show, setShow] = useState(false);

    const icons=[
        {
            to: "https://github.com/DeKingoye", 
            name: 'fa-brands fa-github'
        }, 
        {
            to: "https://www.linkedin.com/in/bernard-mouandza-74aa67177/", 
            name: 'fa-brands fa-linkedin-in'
        }, 
        {
            to: "#", 
            name: 'fa-solid fa-file-pdf'
        }
    ]

    const open = (e)=> {
        e.preventDefault();
        setShow(true);
    }

    const close = (e)=> {
        e.preventDefault();
        setShow(false);
    }

  return (
    <header>
        <div className="social__network">
            {
                icons.map((item, i)=>(
                    <Link to={{ pathname: item.to}} target="_blank" key={i}><i className={""+item.name}></i></Link>
                ))
            }
        </div>
        <Link to="" onClick={open} className="burger">
            <img src={imgMenu}  className="burger__img" />
        </Link>
        <nav className={show?"active":""}>
            <div className="closed">
                <Link to="" onClick={close} className="close">
                    <i className="fa-solid fa-xmark"></i>                
                </Link>
            </div>
            <ul>
                {
                    props.menu.map((item, i)=>(
                        <li key={i}>
                            <Link to={item.to} className={item.to === locationKey?"active":""}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;