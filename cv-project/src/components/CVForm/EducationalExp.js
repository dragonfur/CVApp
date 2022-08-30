import React, { Component } from "react";
import Input from "../utilities/Input";
import Label from "../utilities/Label";
import AddOrDelete from "../utilities/AddOrDelete";

const EducationalExperience = ({ id, onChange, handler }) => {
    return (
        <div style={divStyle} >
            <Input type='text' placeholder='Area of study' name="areaStudy" onChange={onChange} id={id} className="areaStudy"/>
            <Input 
                type='text' 
                placeholder='School name'
                className="schoolName"
                name="schoolName"
                onChange={onChange}
                id={id}
            />
            <div className="dateInputs" style={dateInputsStyle}>
                <Label forId='startDate' text='From'>
                    <Input type='text' name="dateStartedEduc" onChange={onChange} id={id} placeholder="MM/YY" className="dateStartedEduc"/>
                </Label>
                <Label forId='endDate' text='Until'>
                    <Input type="text" name="dateEndedEduc"  onChange={onChange} id={id} placeholder="MM/YY" className="dateEndedEduc"/>
                </Label>
            </div>
            <AddOrDelete text='Delete' typeButton='Delete' onClick={handler} id={id} />
        </div>
    )
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