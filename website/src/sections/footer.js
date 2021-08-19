import { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text"><span className="klavika-font bold">GOVT</span> <span className="opificio-font">analytics</span></h5>
                            <p className="grey-text text-lighten-4 montserrat-font">Análisis y servicios inteligentes para el sector público.</p>
                        </div>
                        {/* <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Copyright © Govt Analytics 2021  
                        <a className="grey-text text-lighten-4 right" href="#!">-</a>
                    </div>
                </div>
            </div>

        )
    }

}

export default Footer