import React, { Component } from "react";

const Section = ({ sectionName, styleName, children }) => {
    return (
        <div className={sectionName} style={    
            (styleName !== undefined) ? styleName : sectionStyle
        }>
            {children}
        </div>    
    )
}

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}

export default Section