import { Component } from "react";

class MemberCard extends Component {

    render() {

        return (
            <div>

                <div className="col s12 m4">
                    <div className="card-panel">

                    <div className="card-image">
                        <img className='member-photo' src={"images/"+this.props.info.photo} alt=''/>
                    </div>
                        

                        
                        <h6 className="govt-grey opificio-font">{this.props.info.name}</h6>
                        <p>
                            <span className="width-max govt-grey montserrat-font" ><b>email:</b> {this.props.info.email}</span><br />
                            <span ><a className="width-max montserrat-font" href={this.props.info.website}>{this.props.info.website}</a></span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default MemberCard