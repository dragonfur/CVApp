import React, { Component } from "react";
import ContactInfo from "../utilities/ContactInfo";
import Introduction from "../utilities/Introduction";
import '../stylesheets/SmallScreens.css'
import SectionHead from "../utilities/SectionHead";
import practicalImage from '../assets/pracImage.svg'
import educationImage from '../assets/educImage.svg'
import '../stylesheets/CVPreview.css'
import EducaionalTemplate from "../utilities/EducationTemplate";
import PracticalTemplate from "../utilities/PracticalTemplate";

const CVPreview = (cvInfo) => {

    return (
        <div style={CVPreviewStyle} className='Preview'>
            <Introduction firstName={cvInfo.cvInfo.PersonalInfo[0].firstName}lastName={cvInfo.cvInfo.PersonalInfo[0].lastName} jobTitle={cvInfo.cvInfo.PersonalInfo[0].jobTitle} objective={cvInfo.cvInfo.PersonalInfo[0].descObjective}>
                <ContactInfo phoneNumber={cvInfo.cvInfo.PersonalInfo[0].phoneNumber} emailtext={cvInfo.cvInfo.PersonalInfo[0].email}  website={cvInfo.cvInfo.PersonalInfo[0].website} address={cvInfo.cvInfo.PersonalInfo[0].address} />
            </Introduction>
            <SectionHead text="Experience" myImage={practicalImage}/>
            <PracticalTemplate practicalInfo={cvInfo.cvInfo.PracticalExperiences}/>
            <SectionHead text="Education" myImage={educationImage}/>
            <EducaionalTemplate educationInfo={cvInfo.cvInfo.EducationalExperiences}/>
        </div>
    )
}

const CVPreviewStyle = {
    backgroundColor: 'white',
    minHeight: '100vh',
    position: 'sticky',
    padding: '1rem',
}

export default CVPreview