import { Component } from "react";

class ServiceCard extends Component{

    render(){
        return(
            <div className="col s12 m4 service-card">
                <h5>{this.props.info.name}</h5>
                <p className='justify-align'>{this.props.info.description}</p>
            </div>
        )
    }
}

export default ServiceCard