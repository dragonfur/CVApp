import React, { Component } from "react";
import Input from "../utilities/Input";
import Label from "../utilities/Label";
import Textarea from "../utilities/Textarea";
import AddOrDelete from "../utilities/AddOrDelete";

const PracticalExperience = ({ id, onChange, handler }) => {
    return (
        <div style={divStyle} id={id}>
             <Input type='text' placeholder='Position title' name="posTitle" onChange={onChange} id={id} className="posTitle"></Input>
            <Input type='text' placeholder='Company name' name="companyName" onChange={onChange} id={id} className="companyName"></Input>
            <Textarea placeholder='Description of tasks' name="descTasks" onChange={onChange} id={id} className="descTasks" />
            <div className="dateInputs" style={dateInputsStyle}>
                <Label forId='startDate' text='From'>
                    <Input type='text' name="dateStartedPrac" onChange={onChange} id={id} placeholder="MM/YY" className="dateStartedPrac" />
                </Label>
                <Label forId='endDate' text='Until'>
                    <Input type="text" name="dateEndedPrac"  onChange={onChange} id={id} placeholder="MM/YY" className="dateEndedPrac"/>
                </Label>
            </div>
            <AddOrDelete text='Delete' typeButton='Delete' id={id} onClick={handler} />
        </div>    
    )

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