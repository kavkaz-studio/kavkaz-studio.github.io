import { useState, useEffect } from 'react'

import { updateData, uploadImage } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditHome = ({ home }) => {

    const [inputValues, setInputValues] = useState({
        firstTitle: "",
        secondTitle: "",
        icon: "",
        background: "",
        formTitle: "",
    })

    const [siteIcon, setSiteIcon] = useState(null)
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [saved, setSaved] = useState(null)

    useEffect(() => {
        if (siteIcon == null) {
            setInputValues({
                ...inputValues,
                icon: home?.icon,
            })
            return
        }
        uploadImage(siteIcon).then(res => setInputValues({
            ...inputValues,
            icon: res
        }))
    }, [siteIcon])

    useEffect(() => {
        if (backgroundImage == null) {
            setInputValues({
                ...inputValues,
                background: home?.icon,
            })
            return
        }
        uploadImage(backgroundImage).then(res => setInputValues({
            ...inputValues,
            background: res
        }))
    }, [backgroundImage])

    useEffect(() => {
        setInputValues({
            firstTitle: home?.title?.first,
            secondTitle: home?.title?.second,
            icon: home?.icon,
            background: home?.background,
            formTitle: home?.formTitle,
        })
    }, [])

    const onSave = (e) => {
        e.preventDefault()
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            formTitle: inputValues.formTitle,
            icon: inputValues.icon,
            background: inputValues.background,
            title: {
                first: inputValues.firstTitle,
                second: inputValues.secondTitle
            }
        }
        updateData(data, "/home")
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
                    <label><p>Первое заглавие:</p><textarea name="firstTitle" type="text" value={inputValues.firstTitle} onChange={handleChange} required /></label>
                    <label><p>Второе заглавие:</p><textarea name="secondTitle" type="text" value={inputValues.secondTitle} onChange={handleChange} required /></label>
                    <label><p>Иконка сайта:</p><input type="file" onChange={(e) => setSiteIcon(e.target.files[0])} /></label>
                    <label><p>Обой сайта:</p><input type="file" onChange={(e) => setBackgroundImage(e.target.files[0])} /></label>
                    <label><p>Заглавие форма:</p><textarea name="formTitle" type="text" value={inputValues.formTitle} onChange={handleChange} required /></label>
                    <div>
                        <Button type="submit">Сохранить</Button>
                    </div>
                </form>
            </div>
            {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditHome
