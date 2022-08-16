import React, { Component } from "react";
import Input from "../utilities/Input";
import Label from "../utilities/Label";
import AddOrDelete from "../utilities/AddOrDelete";

class EducationalExperience extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div style={divStyle} >
                <Input type='text' placeholder='Area of study' name="areaStudy" onChange={this.props.onChange} id={this.props.id} className="areaStudy"/>
                <Input 
                    type='text' 
                    placeholder='School name'
                    className="schoolName"
                    name="schoolName"
                    onChange={this.props.onChange}
                    id={this.props.id}
                />
                <div className="dateInputs" style={dateInputsStyle}>
                    <Label forId='startDate' text='From'>
                        <Input type='text' name="dateStartedEduc" onChange={this.props.onChange} id={this.props.id} placeholder="MM/YY" className="dateStartedEduc"/>
                    </Label>
                    <Label forId='endDate' text='Until'>
                        <Input type="text" name="dateEndedEduc"  onChange={this.props.onChange} id={this.props.id} placeholder="MM/YY" className="dateEndedEduc"/>
                    </Label>
                </div>
                <AddOrDelete text='Delete' typeButton='Delete' onClick={this.props.handler} id={this.props.id} />
            </div>
        )
    }
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'
}

const dateInputsStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50% 50%'
}

export default EducationalExperience