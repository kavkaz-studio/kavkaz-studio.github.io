import { useState } from 'react'
import emailjs from '@emailjs/browser'

import FormInput from '../form-input/form-input.component'

import { Button } from '../button/button.styles'
import { Option, Select } from '../select/Select'

import './home.scss'

const Home = ({ home }) => {

    const [data, setData] = useState({
        name: "",
        number: "",
        city: "Воронеж"
    })
    
    const [messageSent, setMessageSent] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const phoneNumberHandleChange = (event) => {
        if (event.target.value.length !== 13) {
            setData({ ...data, number: "+7" + event.target.value.replaceAll("+7", "").replace(/[^+\d]/g, '') })
        }
    }

    const dataToSend = {
        name: data.name,
        number: `Номер телефона: ${data.number}`,
        city: `Город: ${data.city}`
    }

    const send = (e) => {
        e.preventDefault()
        emailjs.send("kavkaz-studio", "kavkaz-studio", dataToSend, "tHtSfNhZETsKO1nYB")
            .then((response) => {
                console.log('Отправлено!', "Статус: " + response.status, response.text);
            }, (error) => {
                console.log('Не отправлено', error);
            })
        setData({
            name: "",
            number: "",
            city: "Воронеж"
        })
        setMessageSent(true)
    }

    return (
        <div className="home">
            <div className="home-title">
                <h1>{home.title.first}</h1>
                <h1>{home.title.second}</h1>
            </div>
            <div className="form">
                <div>
                    <h3>{home.formTitle}</h3>
                </div>
                <div>
                    <form>
                        <FormInput name="name" label="Имя" value={data.name} onChange={handleChange} />
                        <FormInput name="number" label="Телефон" value={data.number !== "+7" ? data.number : ""} onChange={phoneNumberHandleChange} />
                        <Select name="city" value={data.city} onChange={handleChange}>
                            <Option value="Воронеж">Воронеж</Option>
                            <Option value="Долгопрудный">Долгопрудный</Option>
                        </Select>
                        <Button onClick={send} disabled={data.name === "" || data.number.length < 12 || messageSent}>{data.name === "" && data.number.length < 12 && messageSent ? "Отправлено" : "Отправить"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home