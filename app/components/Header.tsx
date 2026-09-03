import { Link } from "react-router"; // or "react-router" in v7
import logo from '../assets/CasaRoofingSystems_logo.png';

function Header(){
    return(
        <header id="header">
            <div id="logo_hold">
                <Link to="/"><img src={logo} alt="Casa Roofing Systems Logo" /></Link>
            </div>
            <div id="nav_hold">
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
                {/* <button id="request_button" onClick={function(){

                }}>GET IN TOUCH!</button> */}
            </div>
        </header>
    )
}

export default Header;