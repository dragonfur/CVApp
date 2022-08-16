import uuid from "react-uuid"

const info = {
    education: {
        id: uuid(),
        schoolName: '',
        areaStudy: '',
        dateStartedEduc: '',
        dateEndedEduc: '',
        },
    practical: {
        id: uuid(),
        companyName: '',
        posTitle: '',
        descTasks: '',
        dateStartedPrac: '',
        dateEndedPrac: '',
    },
    personal: {
        id: uuid(),
        firstName: '',
        lastName: '',
        jobTitle: '',
        descObjective: '',
        address: '',
        phoneNumber: '',
        email: '',
        website: ''
    }
}

export default info