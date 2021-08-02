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
                        

                        
                        <h6>{this.props.info.name}</h6>
                        <p>
                            <span><b>email:</b> {this.props.info.email}</span><br />
                            <span><a href={this.props.info.website}>{this.props.info.website}</a></span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default MemberCard