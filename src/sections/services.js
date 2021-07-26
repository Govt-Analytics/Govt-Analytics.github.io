import { Component } from "react";
import ServiceCard from "./serviceCard";
import serviceData from '../static/json/services.json'

class Services extends Component{

    constructor(props){
        super(props);
        this.state = {...serviceData}
    }

    render(){
        let services = this.state.services.map((service)=>{return <ServiceCard key={"SC_"+service.name} info={service}/>})

        return(
            <div className='row section-border'>
                <h5>Nuestros Servicios</h5>
                <div className="col m12">                    
                    {services}                    
                </div> 
            </div>
        )
    }

}

export default Services