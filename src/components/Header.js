import { Link } from 'react-router-dom';
import home_icon from '../image/home_icon.svg';
import menu_icon from '../image/menu_icon.svg';
import user_icon from '../image/user_icon.svg';

function Header() {
    return ( 
        <div className="header">
            <div className="header__left">
                <Link to={'/'}>
                <img src={home_icon} /></Link>
                
            </div>
            <div className="header__right">
                <img src={user_icon} />
                <img src={menu_icon} />
            </div>
        </div>
     );
}

export default Header;