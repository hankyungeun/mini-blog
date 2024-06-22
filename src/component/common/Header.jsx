import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
export default function Header(){
    return(
        <div>
            <p className="mainTitleStyle">
            ミ⛧ HAN KYUNG EUN &nbsp;  ͙͡ &nbsp;͘★
            </p>
            <div className="nav-area">
                <div>
                    <Link to="/" className="menu">My</Link>
                </div>
                <div className="menu">Project</div>
                <div>
                    <Link to="/list" className="menu">게시판</Link>
                </div>
                <div className="menu">Contact</div>
            </div>
        </div>
    )
}