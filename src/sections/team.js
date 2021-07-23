import { Component } from "react";
import MemberCard from "./members";
import teamData from '../static/json/team.json'

class Team extends Component{

    constructor(props){
        super(props);
        this.state = {...teamData}
    }

    render(){
        const members = this.state.memebers.map((member)=>{return <MemberCard key={"MC_"+member.email} info={member}/>})
                   
        return(
            <div className='row section-border'>
                <h5>Nuestro Equipo</h5>
                <div className="col m12">                    
                    {members}                    
                </div>                
            </div>
        )
    }

}

export default Team