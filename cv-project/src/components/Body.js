import React, { Component, useState } from "react";
import CVFormCreator from "./CVForm/CVFormCreator";
import CVPreview from "./CVForm/CVPreview";
import '../components/stylesheets/SmallScreens.css'
import info from "./utilities/Info";
import uuid from "react-uuid";

const Body = () => {
    const [infos, setInfos] = useState({
        EducationalExperiences: [info.education],
        PracticalExperiences: [info.practical],
        PersonalInfo: [info.personal]
    })

    const handleAddEducClick = () => {
        setInfos((prevState) => {
            return {
                ...prevState,
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

    const handleDeleteEducClick = (event) => {
        setInfos((prevState) => {
            return {
                ...prevState,
                EducationalExperiences: prevState.EducationalExperiences.filter(a =>
                    event.target.id !== a.id)
            }
        })
    }

    const handleAddPracClick = () => {
        setInfos((prevState) => {
            return {
                ...prevState,
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

    const handleDeletePracClick = (event) => {
        setInfos((prevState) => {
            return {
                ...prevState,
                PracticalExperiences: prevState.PracticalExperiences.filter(a => 
                    event.target.id !== a.id)
            }
        })
    }

    const handleChangeEduc = (event) => {
        const id = event.target.id
        const val = event.target.value
        setInfos((prevState) => {
            const change = prevState.EducationalExperiences.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                ...prevState,
                EducationalExperiences: change}
        })
    }

    const handleChangePrac = (event) => {
        const id = event.target.id
        const val = event.target.value
        setInfos((prevState) => {
            const change = prevState.PracticalExperiences.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                ...prevState,
                PracticalExperiences: change}
        })
    }

    const handleChangePers = (event) => {
        const id = event.target.id
        const val = event.target.value
        setInfos((prevState) => {
            
            const change = prevState.PersonalInfo.map((item) => {
                if (item.id === id) {
                    return { ...item, [event.target.name]: val}
                } else {
                    return item
                }
            })
            return {
                ...prevState,
                PersonalInfo: change
            }
        })
    }

    const handleClearForm = () => {
        setInfos(() => {
            return {
                EducationalExperiences: [info.education],
                PracticalExperiences: [info.practical],
                PersonalInfo: [info.personal]
            }
        })
        Object.keys(info.personal).forEach((key) => {
            if (key === "id") return
            clearInput(key)
        })
        Object.keys(info.education).forEach((key) => {
            if (key === "id") return
            clearInput(key)
        })
        Object.keys(info.practical).forEach((key) => {
            if (key === "id") return
            clearInput(key)
        })
    }

    const clearInput = (inputName) => {
        const input = document.querySelector(`.${inputName}`)
        input.value = ""
    }

    return (
        <div style={bodyStyle} className='Contents'>
            <CVFormCreator
            handleAddEducClick={handleAddEducClick}
            handleAddPracClick={handleAddPracClick}
            handleDeleteEducClick={handleDeleteEducClick}
            handleDeletePracClick={handleDeletePracClick}
            EducationalExperiences={infos.EducationalExperiences}
            PracticalExperiences={infos.PracticalExperiences}
            handleChangeEduc={handleChangeEduc}
            handleChangePrac={handleChangePrac}
            handleChangePers={handleChangePers}
            handleClearForm={handleClearForm}
            />
            <CVPreview cvInfo={infos}/>
        </div>
    )
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