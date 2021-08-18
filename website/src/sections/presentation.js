import { Component } from "react";

class Presentation extends Component{

    render(){
        return(
            <div className='row section-border' id='home'>
                <div className='presentation-label'>
                <p className='center-align no-margin'>
                    <span className="govt-grey bold font-size-8" > GOVT </span>
                    <br/>
                    <span className="govt-grey font-size-4"> analytics </span>
                </p>
                <p className="center-align govt-grey font-size-2">Análisis y servicios inteligentes para el sector público.</p>
                </div>
            </div>
        )
    }

}

export default Presentation