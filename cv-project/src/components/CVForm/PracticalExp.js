import React, { Component } from "react";
import Input from "../utilities/Input";
import Label from "../utilities/Label";
import Textarea from "../utilities/Textarea";
import AddOrDelete from "../utilities/AddOrDelete";

class PracticalExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={divStyle} id={this.props.id}>
                 <Input type='text' placeholder='Position title' name="posTitle" onChange={this.props.onChange} id={this.props.id} className="posTitle"></Input>
                <Input type='text' placeholder='Company name' name="companyName" onChange={this.props.onChange} id={this.props.id} className="companyName"></Input>
                <Textarea placeholder='Description of tasks' name="descTasks" onChange={this.props.onChange} id={this.props.id} className="descTasks" />
                <div className="dateInputs" style={dateInputsStyle}>
                    <Label forId='startDate' text='From'>
                        <Input type='text' name="dateStartedPrac" onChange={this.props.onChange} id={this.props.id} placeholder="MM/YY" className="dateStartedPrac" />
                    </Label>
                    <Label forId='endDate' text='Until'>
                        <Input type="text" name="dateEndedPrac"  onChange={this.props.onChange} id={this.props.id} placeholder="MM/YY" className="dateEndedPrac"/>
                    </Label>
                </div>
                <AddOrDelete text='Delete' typeButton='Delete' id={this.props.id} onClick={this.props.handler} />
            </div>    
        )
    }
} 

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
}

const dateInputsStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50% 50%'
}

export default PracticalExperience