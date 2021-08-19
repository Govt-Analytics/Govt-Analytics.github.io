import { Component } from "react";

class ServiceCard extends Component{

    render(){
        return(
            <div className="col s12 service-card govt-grey">
                <h5 className="opificio-font">- {this.props.info.name}:</h5>
                <p className='justify-align govt-grey montserrat-font'>{this.props.info.description}</p>
            </div>
        )
    }
}

export default ServiceCard