import React, { Component } from "react";

const Introduction = ({firstName, lastName, jobTitle, children, objective}) => {
    return (
        <div style={introductionStyle}>
                <h1>{`${firstName} ${lastName}`}</h1>
                <h2>{jobTitle}</h2>
                {children}
                <div>
                    {objective}
                </div>
            </div>
    )
}

const introductionStyle = {
    marginLeft: '1rem',
    marginRight: '1rem'
}

export default Introduction