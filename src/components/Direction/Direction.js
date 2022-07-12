import { Link, useLocation } from 'react-router-dom';

import './Direction.scss';

function Direction(props) {
    const location = useLocation();
    const locationKey = location.pathname;
    const currentMenu = props.menu.filter( obj => obj.to === locationKey)[0];
    const indexCurrent = props.menu.findIndex(x => x.to ===locationKey);
    
    let next = indexCurrent + 1 === props.menu.length ? 0 : indexCurrent + 1;


    return (
        <>{currentMenu && <Link to={props.menu[next].to} className="direction bounce" ><i className={"fa-solid fa-"+(currentMenu.to === "/"?"chevron-down":"computer-mouse")}></i></Link>}</>
    );
}

export default Direction;