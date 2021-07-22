import { Component } from "react";
import M from 'materialize-css';
import './sections.css'

class NavBar extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }

    render() {
        return (

            <div className="navbar-fixed">
                <nav className='govt-background-color navbar-shadow nav-heigth'>
                    <div className="nav-wrapper">
                        <a href="." className="govt-logo"> Govt Analytics</a>
                        {/* <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                        </ul> */}
                    </div>
                </nav>
            </div>

        )
    }

}

export default NavBar