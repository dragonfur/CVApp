import React, { Component } from "react";

const PracticalTemplate = ({practicalInfo}) => {
    return (
        <div className="PracticalTemplate" style={PracticalTemplateStyle}>
                {practicalInfo.map((i) => (
                    <div key={i.id}>
                        <div className="yearsEXp" style={yearsExpStyle}>
                            <div className="years" style={yearsStyle} key={i.id}>
                                {i.dateStartedPrac} - {i.dateEndedPrac}
                            </div>
                            <div className="jobTitle" style={jobTitleStyle}>
                                {i.posTitle}
                            </div>
                        </div>
                        <div className="companyJobDesc" style={companyJobDescStyle}>
                            <div className="company" style={companyStyle}>
                                {i.companyName}
                            </div>
                            <div className="jobDesc" style={jobDescStyle}>
                                {i.descTasks}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

const PracticalTemplateStyle = {
    margin: '1rem',
    width: '100%',
}

const yearsExpStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
}

const yearsStyle = {
    fontSize: '1.25em',
    width: '27.5%'
}

const jobTitleStyle = {
    fontSize: '1.5em',
}

const companyJobDescStyle = {
    marginLeft: '27.5%',
    marginRight: '10%'
}

const companyStyle = {
    fontSize: '1.2em',
}

const jobDescStyle = {
    fontSize: '1em',
}

export default PracticalTemplate