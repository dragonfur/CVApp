import React, { Component } from "react";
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import location from '../assets/location.svg'
import linkedin from '../assets/linkedin.svg'

const ContactInfo = ({phoneNumber, emailtext, website, address}) => {
    return (
        <div>
            <div className="contactInfo" style={contactInfoStyle}>
                <div className="number" style={numberStyle}>
                    <img src={phone} style={imgStyle}/>
                    {phoneNumber}
                </div>
                <div className="email" style={emailStyle}>
                    <img src={email} style={imgStyle}/>
                    {emailtext}
                </div>
                <div className="website" style={websiteStyle}>
                    <img src={linkedin} style={imgStyle}/>
                    {website}
                </div>
                <div className="address" style={addressStyle}>
                    <img src={location} style={imgStyle}/>
                    {address}
                </div>
            </div>
        </div>
    )
}

const contactInfoStyle = {
    display: 'grid',
    rowGap:'1vmin',
    gridTemplateAreas: `
        'number website'
        'email address`,
    width: '50%',
    marginBottom: '1rem',
}

const numberStyle = {
    display: 'flex',
    gap: '1vmin',
    alignItems: 'center',
    gridArea: 'number',
}

const emailStyle = {
    gridArea: 'email',
    display: 'flex',
    gap: '1vmin',
    alignItems: 'center',
}

const websiteStyle = {
    gridArea: 'website',
    display: 'flex',
    gap: '1vmin',
    alignItems: 'center',
}

const addressStyle = {
    gridArea: 'address',
    display: 'flex',
    gap: '1vmin',
    alignItems: 'center',
}

const imgStyle = {
    height: '.9rem',
    padding: '.3rem',
    backgroundColor: 'midnightblue',
    borderRadius: '3px'
}

export default ContactInfo