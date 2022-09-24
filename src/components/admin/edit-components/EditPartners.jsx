import { useEffect } from 'react'
import { useState } from 'react'

import { updateData } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditPartners = ({ partners }) => {

    const [firstStudio, setFirstStudio] = useState({
        title: "",
        firstOwner: "",
        secondOwner: "",
        inst: "",
        wp: "",
        vk: "",
        mail: "",
        firstPhone: "",
        secondPhone: ""
    })
    const [secondStudio, setSecondStudio] = useState({
        title: "",
        firstOwner: "",
        secondOwner: "",
        inst: "",
        wp: "",
        vk: "",
        mail: "",
        firstPhone: "",
        secondPhone: ""
    })
    const [saved, setSaved] = useState(null)

    useEffect(() => {
        setFirstStudio({
            title: partners.first.title,
            firstOwner: partners.first.owners[0],
            secondOwner: partners.first.owners[1],
            inst: partners.first.instagram,
            wp: partners.first.whatsApp,
            vk: partners.first.vk,
            mail: partners.first.mail,
            firstPhone: partners.first.phone[0],
            secondPhone: partners.first.phone[1],
        })
        setSecondStudio({
            title: partners.second.title,
            firstOwner: partners.second.owners[0],
            secondOwner: partners.second.owners[1],
            inst: partners.second.instagram,
            wp: partners.second.whatsApp,
            vk: partners.second.vk,
            mail: partners.second.mail,
            firstPhone: partners.second.phone[0],
            secondPhone: partners.second.phone[1],
        })
    }, [])

    const save = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            first: {
              instagram: firstStudio.inst,
              mail: firstStudio.mail,
              owners: [
                firstStudio.firstOwner,
                firstStudio.secondOwner
              ],
              phone: [firstStudio.firstPhone, firstStudio.secondPhone],
              title: firstStudio.title,
              vk: firstStudio.vk,
              whatsApp: firstStudio.wp
            },
            second: {
              instagram: secondStudio.inst,
              mail: secondStudio.mail,
              owners: [
                secondStudio.firstOwner,
                secondStudio.secondOwner
              ],
              phone: [secondStudio.firstPhone, secondStudio.secondPhone],
              title: secondStudio.title,
              vk: secondStudio.vk,
              whatsApp: secondStudio.wp
            }
          }
        updateData(data, "/partners")
    }

    const handleChange = (e) => {
        const { name, id, value } = e.target

        switch (id) {
            case "first":
                setFirstStudio({ ...firstStudio, [name]: value })
                break
            case "second":
                setSecondStudio({ ...secondStudio, [name]: value })
                break
        }
    }

    return (
        <>
            <div className="admin-partners">
                <div className="labels-wrapper">
                    <div>
                        <label><p>Первая студия:</p><textarea name="title" id="first" type="text" value={firstStudio.title} onChange={handleChange} /></label>
                        <label><p>Первый основатель:</p><textarea name="firstOwner" id="first" type="text" value={firstStudio.firstOwner} onChange={handleChange} /></label>
                        <label><p>Второй основатель:</p><textarea name="secondOwner" id="first" type="text" value={firstStudio.secondOwner} onChange={handleChange} /></label>
                        <label><p>Инстаграм:</p><input name="inst" id="first" type="text" value={firstStudio.inst} onChange={handleChange} /></label>
                        <label><p>WhatsApp:</p><input name="wp" id="first" type="text" value={firstStudio.wp} onChange={handleChange} /></label>
                        <label><p>ВКонтакте:</p><input name="vk" id="first" type="text" value={firstStudio.vk} onChange={handleChange} /></label>
                        <label><p>Mail:</p><input name="mail" id="first" type="text" value={firstStudio.mail} onChange={handleChange} /></label>
                        <label><p>Первый номер:</p><input name="firstPhone" id="first" type="text" value={firstStudio.firstPhone} onChange={handleChange} /></label>
                        <label><p>Второй номер:</p><input name="secondPhone" id="first" type="text" value={firstStudio.secondPhone} onChange={handleChange} /></label>
                    </div>
                    <div>
                        <label><p>Первая студия:</p><textarea name="title" id="second" type="text" value={secondStudio.title} onChange={handleChange} /></label>
                        <label><p>Первый основатель:</p><textarea name="firstOwner" id="second" type="text" value={secondStudio.firstOwner} onChange={handleChange} /></label>
                        <label><p>Второй основатель:</p><textarea name="secondOwner" id="second" type="text" value={secondStudio.secondOwner} onChange={handleChange} /></label>
                        <label><p>Инстаграм:</p><input name="inst" id="second" type="text" value={secondStudio.inst} onChange={handleChange} /></label>
                        <label><p>WhatsApp:</p><input name="wp" id="second" type="text" value={secondStudio.wp} onChange={handleChange} /></label>
                        <label><p>ВКонтакте:</p><input name="vk" id="second" type="text" value={secondStudio.vk} onChange={handleChange} /></label>
                        <label><p>Mail:</p><input name="mail" id="second" type="text" value={secondStudio.mail} onChange={handleChange} /></label>
                        <label><p>Первый номер:</p><input name="firstPhone" id="second" type="text" value={secondStudio.firstPhone} onChange={handleChange} /></label>
                        <label><p>Второй номер:</p><input name="secondPhone" id="second" type="text" value={secondStudio.secondPhone} onChange={handleChange} /></label>
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

export default EditPartners
