import { Link } from "react-router"; // or "react-router" in v7
function Header(){
    return(
        <header id="header">
            <div id="logo_hold">
                <img src="./assets/CasaRoofingSystems_logo.png" />
            </div>
            <div id="nav_hold">
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </nav>
                <button id="request_button" onClick={function(){

                }}>GET IN TOUCH!</button>
            </div>
        </header>
    )
}

export default Header;