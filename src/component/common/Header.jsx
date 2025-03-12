import { Link, useLocation  } from 'react-router-dom';
export default function Header(){
    const location = useLocation();

    return( 
        <div>
            <p className="mainTitleStyle">
            ミ⛧ HAN KYUNG EUN &nbsp;  ͙͡ &nbsp;͘★
            </p>
            <div className="nav-area">
                <div>
                    <Link to="/" className={location.pathname === "/" ? "menu-active" : "menu"}>My</Link>
                </div>
                <div className="menu">Project</div>
                <div>
                    <Link to="/list" className={location.pathname === "/list" ? "menu-active" : "menu"}>게시판</Link>
                </div>
                <div className="menu">Contact</div>
            </div>
        </div>
    )
}