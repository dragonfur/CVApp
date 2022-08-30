import React, { Component } from 'react'
import Input from '../utilities/Input'
import Textarea from '../utilities/Textarea'

const PersonalInformation = ({ onChange, id }) => {
    return (
        <div style={divStyle} >
            {/* header for CV */}
            <Input className="firstName" type='text' placeholder='First name' onChange={onChange} id={id} name="firstName"></Input>
            <Input className="lastName" type='text' placeholder='Last name' onChange={onChange} id={id} name="lastName"></Input>
            <Input className="jobTitle" type='text' placeholder='Job title' onChange={onChange} id={id} name="jobTitle"></Input>
            <Textarea className="descObjective" placeholder='Description and objective' onChange={onChange} id={id} name="descObjective"></Textarea>

            {/* Other personal info */}
            <Input className="address"  type='text' placeholder='Address' onChange={onChange} id={id} name="address"></Input>
            <Input className="phoneNumber" type='tel' placeholder='Phone number' onChange={onChange} id={id} name="phoneNumber"></Input>
            <Input className="email" type='email' placeholder='Email' onChange={onChange} id={id} name="email"></Input>
            <Input className="website" type='url' placeholder="Website" onChange={onChange} id={id} name="website"></Input>
        </div>
    )    

}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'
}

export default PersonalInformation