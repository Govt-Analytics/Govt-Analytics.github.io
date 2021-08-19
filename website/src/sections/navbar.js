import { Component } from "react";
import M from 'materialize-css';
import './sections.css'

class NavBar extends Component {


    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }

    handleScroll(e, section) {
        e.preventDefault();

        const anchor = document.querySelector('#' + section)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    render() {
        return (

            <div className="navbar-fixed">
                <nav className='govt-background-color navbar-shadow nav-heigth'>
                    <div className="nav-wrapper">

                        <img className="govt-icon" alt="logo" src={"svg/govt_icon.svg"} />
                        {/* <hr className="separator" /> */}
                        <a href="." className="govt-logo"> <span className="govt-grey bold klavika-font">GOVT</span> <span className="govt-orange opificio-font">analytics</span></a>

                        <ul className="right hide-on-med-and-down govt-sections">
                            <li><a className="govt-grey opificio-font" href="#home" onClick={(e) => this.handleScroll(e, 'home')}>INICIO</a></li>
                            <li><a className="govt-grey opificio-font" href="#services" onClick={(e) => this.handleScroll(e, 'services')}>SERVICIOS</a></li>
                            <li><a className="govt-grey opificio-font" href="#team" onClick={(e) => this.handleScroll(e, 'team')}>EQUIPO</a></li>
                            <li><a className="govt-grey opificio-font" href="#contact" onClick={(e) => this.handleScroll(e, 'contact')}>CONTACTO</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }

}

export default NavBar