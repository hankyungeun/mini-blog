import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
export default function Header(){
    return(
        <div>
            <p className="mainTitleStyle">
            ミ⛧ React Mini Blog ͙͘͡★
            </p>
            <div className="nav-area">
                <div>
                    <Link to="/" className="menu">HOME</Link>
                </div>
                <div className="menu">공지사항</div>
                <div>
                    <Link to="/list" className="menu">게시판</Link>
                </div>
                <div className="menu">ETC</div>
            </div>
        </div>
    )
}