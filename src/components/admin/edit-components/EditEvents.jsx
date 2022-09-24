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
    
    useEffect(() => {
        setInputValues({...inputValues, title: events.title})
    }, [])

    useEffect(() => {
        if (firstImage == null) return
        uploadImage(firstImage).then(res => setInputValues({
            ...inputValues,
            firstImageUrl: res
        }))
    }, [firstImage])
    
    useEffect(() => {
        if (secondImage == null) return
        uploadImage(secondImage).then(res => setInputValues({
            ...inputValues,
            secondImageUrl: res
        }))
    }, [secondImage])
    
    const addEvent = () => {
        setLiveEvents([
            ...liveEvents,
            {
                id: Math.random(),
                text: inputValues.text,
                images: [inputValues.firstImageUrl, inputValues.secondImageUrl]
            }
        ])
        setInputValues({
            ...inputValues,
            text: "",
            firstImageUrl: "",
            secondImageUrl: ""
        })
        setFirstImage("")
        setSecondImage("")
    }

    const deleteEvent = (id) => {
        setLiveEvents(liveEvents.filter(el => el.id !== id))
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
                                <p onClick={() => deleteEvent(id)}>Удалить</p>
                            </div>
                            {images.map((el, i) => <img key={i} src={el} alt="eventImage" />)}
                        </div>
                    })}
                </div>
                <div className="admin-add-events">
                    <div className="labels-wrapper">
                        <label><p>Заглавие:</p><input name="title" type="text" value={inputValues.title} onChange={handleChange} required /></label>
                        <label><p>Текст события:</p><textarea name="text" type="text" value={inputValues.text} onChange={handleChange} placeholder="Напишите текст" required /></label>
                        <label><p>Первая картинка:</p><input type="file" value={firstImage} onChange={(e) => setFirstImage(e.target.files[0])} /></label>
                        <label><p>Вторая картинка:</p><input type="file" value={secondImage} onChange={(e) => setSecondImage(e.target.files[0])} /></label>
                    </div>
                    <Button onClick={addEvent}>Добавить</Button>
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
