import React, { Component } from "react";
import AddOrDelete from "../utilities/AddOrDelete";
import Button from "../utilities/Button";
import Section from "../utilities/Section";
import Title from "../utilities/Title";
import EducationalExperience from "./EducationalExp";
import PersonalInformation from "./PersonalInfo";
import PracticalExperience from "./PracticalExp";
import '../stylesheets/SmallScreens.css'
import "../stylesheets/DeleteAdd.css"
import "../stylesheets/formButtons.css"
import info from "../utilities/Info";

class CVFormCreator extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className='CVFormCreator' style={CVFormCreatorStyle} onSubmit={onSubmitButton} id="lol">
                <Section sectionName='personalInfo' isLast={false}>
                    <Title text='Personal Information' />
                    <PersonalInformation key={`${info.personal.id}`} id={`${info.personal.id}`} onChange={this.props.handleChangePers} />
                </Section>
                <Section sectionName='educInfo' isLast={false}>
                    <Title text='Educational Experience' />
                    {this.props.EducationalExperiences.map((i) => (
                        <EducationalExperience key={`${i.id}`} id={`${i.id}`} handler={this.props.handleDeleteEducClick}
                        onChange={this.props.handleChangeEduc}/>
                    ))}
                    <AddOrDelete text='Add' typeButton='Add' onClick={this.props.handleAddEducClick} />
                </Section>
                <Section sectionName='pracInfo' isLast={true}>
                    <Title text='Practical Experience' />
                    {this.props.PracticalExperiences.map((i) => (
                        <PracticalExperience key={`${i.id}`} id={`${i.id}`} handler={this.props.handleDeletePracClick} onChange={this.props.handleChangePrac}/>
                    ))}
                    <AddOrDelete text='Add' typeButton='Add' onClick={this.props.handleAddPracClick}/>
                </Section>
                <Section sectionName='formButton' styleName={sectionFormat} >
                    <Button text='Clear' buttonClass='Clear' onClick={this.props.handleClearForm}/>
                </Section>
            </form>
        )
    }
}

const sectionFormat = {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-between',
}

const CVFormCreatorStyle = {
    fontFamily: 'sans serif',
    backgroundColor: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
}

const onSubmitButton = (event) => {
    event.preventDefault()
}

export default CVFormCreator