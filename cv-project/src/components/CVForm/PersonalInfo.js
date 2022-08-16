import React, { Component } from 'react'
import Input from '../utilities/Input'
import Textarea from '../utilities/Textarea'

class PersonalInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={divStyle} >
                {/* header for CV */}
                <Input className="firstName" type='text' placeholder='First name' onChange={this.props.onChange} id={this.props.id} name="firstName"></Input>
                <Input className="lastName" type='text' placeholder='Last name' onChange={this.props.onChange} id={this.props.id} name="lastName"></Input>
                <Input className="jobTitle" type='text' placeholder='Job title' onChange={this.props.onChange} id={this.props.id} name="jobTitle"></Input>
                <Textarea className="descObjective" placeholder='Description and objective' onChange={this.props.onChange} id={this.props.id} name="descObjective"></Textarea>
    
                {/* Other personal info */}
                <Input className="address"  type='text' placeholder='Address' onChange={this.props.onChange} id={this.props.id} name="address"></Input>
                <Input className="phoneNumber" type='tel' placeholder='Phone number' onChange={this.props.onChange} id={this.props.id} name="phoneNumber"></Input>
                <Input className="email" type='email' placeholder='Email' onChange={this.props.onChange} id={this.props.id} name="email"></Input>
                <Input className="website" type='url' placeholder="Website" onChange={this.props.onChange} id={this.props.id} name="website"></Input>
            </div>
        )    
    }
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'
}

export default PersonalInformation