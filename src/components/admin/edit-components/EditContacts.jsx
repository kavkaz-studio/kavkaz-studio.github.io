import { useEffect, useState } from "react"

import { updateData } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditContacts = ({ contacts }) => {

    const [firstAddress, setFirstAddress] = useState({
        city: "",
        street: "",
        dom: "",
        station: "",
        buses: ""
    })
    const [secondAddress, setSecondAddress] = useState({
        city: "",
        street: "",
        dom: "",
        station: "",
        buses: ""
    })
    const [ownerContacts, setOwnerContacts] = useState({
        mail: "",
        firstPhone: "",
        secondPhone: "",
        inst: "",
        tg: "",
        vk: "",
        wp: ""
    })
    const [saved, setSaved] = useState(null)

    useEffect(() => {
        setFirstAddress({
            city: contacts.addresses.dolgoprudni.city,
            street: contacts.addresses.dolgoprudni.more[0],
            dom: contacts.addresses.dolgoprudni.more[1],
            station: contacts.addresses.dolgoprudni.more[2],
            buses: contacts.addresses.dolgoprudni.more[3]
        })
        setSecondAddress({
            city: contacts.addresses.voronezh.city,
            street: contacts.addresses.voronezh.more[0],
            dom: contacts.addresses.voronezh.more[1],
            station: contacts.addresses.voronezh.more[2],
            buses: contacts.addresses.voronezh.more[3]
        })
        setOwnerContacts({
            mail: contacts.mail,
            firstPhone: contacts.phone[0],
            secondPhone: contacts.phone[1],
            inst: contacts.instagram,
            tg: contacts.telegram,
            vk: contacts.vk,
            wp: contacts.whatsApp
        })
    }, [])

    const save = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            addresses: {
                dolgoprudni: {
                    city: firstAddress.city,
                    more: [
                        firstAddress.street,
                        firstAddress.dom,
                        firstAddress.station,
                        firstAddress.buses
                    ]
                },
                voronezh: {
                    city: secondAddress.city,
                    more: [
                        secondAddress.street,
                        secondAddress.dom,
                        secondAddress.station,
                        secondAddress.buses
                    ]
                }
            },
            instagram: ownerContacts.inst,
            mail: ownerContacts.mail,
            phone: [
                ownerContacts.firstPhone,
                ownerContacts.secondPhone
            ],
            telegram: ownerContacts.tg,
            vk: ownerContacts.vk,
            whatsApp: ownerContacts.wp
        }
        updateData(data, "/contacts")
    }

    const handleChange = (e) => {
        const { name, id, value } = e.target

        switch (id) {
            case "first":
                setFirstAddress({ ...firstAddress, [name]: value })
                break
            case "second":
                setSecondAddress({ ...secondAddress, [name]: value })
                break
            case "contacts":
                setOwnerContacts({ ...ownerContacts, [name]: value })
                break
        }
    }

    return (
        <>
            <div className="admin-contacts">
                <div className="labels-wrapper">
                    <div>
                        <h2>Первая студия</h2>
                        <label><p>Город:</p><input name="city" id="first" type="text" value={firstAddress.city} onChange={handleChange} /></label>
                        <label><p>Улица:</p><input name="street" id="first" type="text" value={firstAddress.street} onChange={handleChange} /></label>
                        <label><p>Дом культуры:</p><input name="dom" id="first" type="text" value={firstAddress.dom} onChange={handleChange} /></label>
                        <label><p>Остановка:</p><input name="station" id="first" type="text" value={firstAddress.station} onChange={handleChange} /></label>
                        <label><p>Автобусы:</p><input name="buses" id="first" type="text" value={firstAddress.buses} onChange={handleChange} /></label>
                        <h2>Вторая студия</h2>
                        <label><p>Город:</p><input name="city" id="second" type="text" value={secondAddress.city} onChange={handleChange} /></label>
                        <label><p>Улица:</p><input name="street" id="second" type="text" value={secondAddress.street} onChange={handleChange} /></label>
                        <label><p>Дом культуры:</p><input name="dom" id="second" type="text" value={secondAddress.dom} onChange={handleChange} /></label>
                        <label><p>Остановка:</p><input name="station" id="second" type="text" value={secondAddress.station} onChange={handleChange} /></label>
                        <label><p>Автобусы:</p><input name="buses" id="second" type="text" value={secondAddress.buses} onChange={handleChange} /></label>
                    </div>
                    <div>
                        <h2>Контакты владельца</h2>
                        <label><p>Mail:</p><input name="mail" id="contacts" type="text" value={ownerContacts.mail} onChange={handleChange} /></label>
                        <label><p>Инстаграм:</p><input name="inst" id="contacts" type="text" value={ownerContacts.inst} onChange={handleChange} /></label>
                        <label><p>ВКонтакте:</p><input name="vk" id="contacts" type="text" value={ownerContacts.vk} onChange={handleChange} /></label>
                        <label><p>Телеграм:</p><input name="tg" id="contacts" type="text" value={ownerContacts.tg} onChange={handleChange} /></label>
                        <label><p>WhatsApp:</p><input name="wp" id="contacts" type="text" value={ownerContacts.wp} onChange={handleChange} /></label>
                        <label><p>Первый номер:</p><input name="firstPhone" id="contacts" type="text" value={ownerContacts.firstPhone} onChange={handleChange} /></label>
                        <label><p>Второй номер:</p><input name="secondPhone" id="contacts" type="text" value={ownerContacts.secondPhone} onChange={handleChange} /></label>
                    </div>
                </div>
                <div className="buttons">
                    <Button onClick={save}>Сохранить</Button>
                </div>
            </div>
            {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditContacts
