import { useState, useEffect } from 'react'

import { updateData, uploadImage } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditEvents = ({ events }) => {

    const [liveEvents, setLiveEvents] = useState(events.data)
    const [inputValues, setInputValues] = useState({
        title: "",
        text: "",
        firstImageUrl: "",
        secondImageUrl: ""
    })
    const [firstImage, setFirstImage] = useState(null)
    const [secondImage, setSecondImage] = useState(null)
    const [saved, setSaved] = useState(null)
    const [buttonType, setButtonType] = useState(null)

    useEffect(() => {
        setInputValues({ ...inputValues, title: events.title })
    }, [])

    useEffect(() => {
        if (firstImage == null || inputValues.firstImageUrl == "") return
        uploadImage(firstImage).then(res => setInputValues({
            ...inputValues,
            firstImageUrl: res
        }))
    }, [firstImage])

    useEffect(() => {
        if (secondImage == null || inputValues.secondImageUrl === "") return
        uploadImage(secondImage).then(res => setInputValues({
            ...inputValues,
            secondImageUrl: res
        }))
    }, [secondImage])

    const clearInputs = () => {
        setInputValues({
            ...inputValues,
            text: "",
            firstImageUrl: "",
            secondImageUrl: ""
        })
        setButtonType(false)
    }

    const addEvent = () => {
        if (inputValues.text === "") return
        setLiveEvents([
            ...liveEvents,
            {
                id: Math.random(),
                text: inputValues.text,
                images: [inputValues.firstImageUrl, inputValues.secondImageUrl]
            }
        ])
        clearInputs()
        setFirstImage("")
        setSecondImage("")
    }

    const deleteEvent = (id) => {
        setLiveEvents(liveEvents.filter(el => el.id !== id))
    }

    const saveEdited = () => {
        setLiveEvents([
            {
                id: Math.random(),
                text: inputValues.text,
                images: [inputValues.firstImageUrl, inputValues.secondImageUrl]
            },
            ...liveEvents
        ])
        clearInputs()
    }

    const editEvent = (id) => {
        setButtonType(true)
        const event = liveEvents.filter(el => el.id === id)[0]
        setLiveEvents(liveEvents.filter(el => el.id !== id))
        setInputValues({
            ...inputValues,
            text: event.text,
            firstImageUrl: event.images[0],
            secondImageUrl: event.images[1]
        })
    }

    const save = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            data: liveEvents,
            title: inputValues.title
        }
        updateData(data, "/events")
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    return (
        <>
            <div className="admin-events">
                <div className="admin-events-live">
                    {liveEvents.map(({ id, text, images }, i) => {
                        return <div key={i} className="admin-event-live">
                            <div>
                                <p>{text}</p>
                                <div>
                                    <p onClick={() => editEvent(id)}>Редактировать</p>
                                    <p onClick={() => deleteEvent(id)}>Удалить</p>
                                </div>
                            </div>
                            {images.map((el, i) => <img key={i} src={el} alt="eventImage" />)}
                        </div>
                    })}
                </div>
                <div className="admin-add-events">
                    <div className="labels-wrapper">
                        <label><p>Заглавие:</p><input name="title" type="text" value={inputValues.title} onChange={handleChange} required /></label>
                        <label><p>Текст события:</p><textarea name="text" type="text" value={inputValues.text} onChange={handleChange} placeholder="Напишите текст" required /></label>
                        {buttonType ? null : <>
                            <label><p>Первая картинка:</p><input type="file" value={firstImage} onChange={(e) => setFirstImage(e.target.files[0])} /></label>
                            <label><p>Вторая картинка:</p><input type="file" value={secondImage} onChange={(e) => setSecondImage(e.target.files[0])} /></label>
                        </>}
                    </div>
                    <div>
                        {buttonType ? <Button onClick={saveEdited}>Применить</Button> : <Button onClick={addEvent}>Добавить</Button>}
                        <Button onClick={clearInputs}>Сбросить</Button>
                    </div>
                </div>
                <div>
                    <Button onClick={save}>Сохранить</Button>
                </div>
            </div>
            {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditEvents
