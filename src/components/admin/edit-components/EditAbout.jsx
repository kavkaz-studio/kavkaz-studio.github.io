import { useState, useEffect } from 'react'

import { updateData, uploadImage } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditAbout = ({ about }) => {

    const [inputValues, setInputValues] = useState({
        image: "",
        firstTitle: "",
        firstText: "",
        secondTitle: "",
        secondText: ""
    })
    const [image, setImage] = useState(null)
    const [saved, setSaved] = useState(null)

    useEffect(() => {
        if (image == null) {
            setInputValues({
                ...inputValues,
                image: about?.imageUrl,
            })
            return
        }
        uploadImage(image).then(res => setInputValues({
            ...inputValues,
            image: res
        }))
    }, [image])

    useEffect(() => {
        setInputValues({
            image: about?.imageUrl,
            firstTitle: about?.first?.title,
            firstText: about?.first?.text,
            secondTitle: about?.second?.title,
            secondText: about?.second?.text
        })
    }, [])

    const onSave = (e) => {
        e.preventDefault()
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            first: {
                title: inputValues.firstTitle,
                text: inputValues.firstText
            },
            second: {
                title: inputValues.secondTitle,
                text: inputValues.secondText
            },
            imageUrl: inputValues.image
        }
        updateData(data, "/about")
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
            <div className="admin-home">
                <form onSubmit={onSave}>
                    <label><p>Картинка страницы:</p><input type="file" onChange={(e) => setImage(e.target.files[0])} /></label>
                    <label><p>Первое заглавие:</p><textarea name="firstTitle" type="text" value={inputValues.firstTitle} onChange={handleChange} required /></label>
                    <label><p>Текст первой заглавии:</p><textarea name="firstText" type="text" value={inputValues.firstText} onChange={handleChange} required /></label>
                    <label><p>Второе заглавие:</p><textarea name="secondTitle" type="text" value={inputValues.secondTitle} onChange={handleChange} required /></label>
                    <label><p>Текст второй заглавии:</p><textarea name="secondText" type="text" value={inputValues.secondText} onChange={handleChange} required /></label>
                    <div>
                        <Button type="submit">Сохранить</Button>
                    </div>
                </form>
            </div>
            {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditAbout
