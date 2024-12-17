import './Header.css';
import logo from './react.svg'

const Header = () => {
    return (
        <>
            <nav className="">
                <div className="container nav_container">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <ul className="nav_list ">
                            <li><a href="#">About</a></li>
                            <li><a href="#">foto</a></li>
                            <li><a href="#">profile</a></li>
                            <li><a href="#">tolls</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Header;