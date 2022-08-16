import React, { Component } from "react";

class EducaionalTemplate extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={EducationTemplateStyle}>
                {this.props.educationInfo.map((i) => (
                    <div>
                        <div className="yearsTitle" style={educInfoStyle}>
                            <div className="years"  style={yearsStyle}>
                                {i.dateStartedEduc} - {i.dateEndedEduc}
                            </div>
                            <div className="educName" style={educName}>
                                {i.areaStudy}
                            </div>
                        </div>
                        <div className="school" style={schoolStyle}>
                            {i.schoolName}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const EducationTemplateStyle = {
    margin: '1rem',
    width: '100%',
}

const educInfoStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
}

const yearsStyle = {
    fontSize: '1.25em',
    width: '20%'
}

const educName = {
    fontSize: '1.5em',
}

const schoolStyle = {
    marginLeft: '20%',
    fontSize: '1.2em',
    marginRight: '10%'
}

export default EducaionalTemplate