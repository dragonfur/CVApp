import React, { Component } from "react";
import CVFormCreator from "./CVForm/CVFormCreator";
import CVPreview from "./CVForm/CVPreview";
import '../components/stylesheets/SmallScreens.css'
import info from "./utilities/Info";
import uuid from "react-uuid";

class Body extends Component {
    constructor() {
        super()
        this.state = {
            EducationalExperiences: [info.education],
            PracticalExperiences: [info.practical],
            PersonalInfo: [info.personal]
        }
        this.handleAddEducClick = this.handleAddEducClick.bind(this)
        this.handleDeleteEducClick = this.handleDeleteEducClick.bind(this)
        this.handleAddPracClick = this.handleAddPracClick.bind(this)
        this.handleDeletePracClick = this.handleDeletePracClick.bind(this)
        this.handleChangeEduc = this.handleChangeEduc.bind(this)
        this.handleChangePrac = this.handleChangePrac.bind(this)
        this.handleChangePers = this.handleChangePers.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
        this.myRef = React.createRef()
    }

    handleAddEducClick() {
        this.setState((prevState) => {
            return {
                EducationalExperiences: prevState.EducationalExperiences.concat({
                    id: uuid(),
                    schoolName: '',
                    areaStudy: '',
                    dateStarted: '',
                    dateEnded: '',
                }),
            }
            }
        )
    }

    handleDeleteEducClick(event) {
        this.setState((prevState) => {
            return {
                EducationalExperiences: prevState.EducationalExperiences.filter(a =>
                    event.target.id !== a.id)
            }
        })
    }

    handleAddPracClick() {
        this.setState((prevState) => {
            return {
                PracticalExperiences: prevState.PracticalExperiences.concat({
                    id: uuid(),
                    companyName: '',
                    posTitle: '',
                    descTasks: '',
                    dateStarted: '',
                    dateEnded: '',
                })
            }
        })
    }

    handleDeletePracClick(event) {
        this.setState((prevState) => {
            return {
                PracticalExperiences: prevState.PracticalExperiences.filter(a => 
                    event.target.id !== a.id)
            }
        })
    }

    handleChangeEduc(event) {
        const id = event.target.id
        const val = event.target.value
        this.setState((prevState) => {
            const change = prevState.EducationalExperiences.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                EducationalExperiences: change}
        })
    }

    handleChangePrac(event) {
        const id = event.target.id
        const val = event.target.value
        this.setState((prevState) => {
            const change = prevState.PracticalExperiences.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                PracticalExperiences: change}
        })
    }

    handleChangePers(event) {
        const id = event.target.id
        const val = event.target.value
        this.setState((prevState) => {
            const change = prevState.PersonalInfo.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                PersonalInfo: change}
        })
    }

    handleClearForm() {
        this.setState(() => {
            return {
                EducationalExperiences: [info.education],
                PracticalExperiences: [info.practical],
                PersonalInfo: [info.personal]
            }
        })
        Object.keys(info.personal).forEach((key) => {
            if (key === "id") return
            this.clearInput(key)
        })
        Object.keys(info.education).forEach((key) => {
            if (key === "id") return
            this.clearInput(key)
        })
        Object.keys(info.practical).forEach((key) => {
            if (key === "id") return
            this.clearInput(key)
        })
    }

    clearInput(inputName) {
        const input = document.querySelector(`.${inputName}`)
        input.value = ""
    }

    render() {
        return (
            <div style={bodyStyle} className='Contents'>
                <CVFormCreator
                handleAddEducClick={this.handleAddEducClick}
                handleAddPracClick={this.handleAddPracClick}
                handleDeleteEducClick={this.handleDeleteEducClick}
                handleDeletePracClick={this.handleDeletePracClick}
                EducationalExperiences={this.state.EducationalExperiences}
                PracticalExperiences={this.state.PracticalExperiences}
                handleChangeEduc={this.handleChangeEduc}
                handleChangePrac={this.handleChangePrac}
                handleChangePers={this.handleChangePers}
                handleClearForm={this.handleClearForm}
                />
                <CVPreview cvInfo={this.state} ref={this.myRef}/>
            </div>
        )
    }
}

const bodyStyle = {
    display: 'flex',
    gap: '1vw',
    paddingTop: '1vh',
    paddingBottom: '1vh',
    justifyContent: 'center',
    backgroundColor: '#E4DCCF',
}

export default Body