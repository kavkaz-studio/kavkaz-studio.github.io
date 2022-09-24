import { useEffect, useState } from "react"

import { updateData } from '../../../firebase/firebase'

import { Button } from "../../button/button.styles"

const EditCourses = ({ courses }) => {

    const [dolgOneAndHalf, setDolgOneAndHalf] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
    })
    const [dolgTwo, setDolgTwo] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
    })
    const [vrnOneAndHalf, setVrnOneAndHalf] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
    })
    const [vrnTwo, setVrnTwo] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
    })
    const [saved, setSaved] = useState(null)

    const save = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 2000)
        const data = {
            dolgoprudni: {
                firstMonth: {
                    hourAndHalf: dolgOneAndHalf.first,
                    twoHours: dolgTwo.first
                },
                secondMonth: {
                    hourAndHalf: dolgOneAndHalf.second,
                    twoHours: dolgTwo.second
                },
                months: {
                    hourAndHalf: dolgOneAndHalf.third,
                    twoHours: dolgTwo.third
                },
                group: {
                    hourAndHalf: dolgOneAndHalf.fourth,
                    twoHours: dolgTwo.fourth
                }
            },
            voronezh: {
                firstMonth: {
                    hourAndHalf: vrnOneAndHalf.first,
                    twoHours: vrnTwo.first
                },
                secondMonth: {
                    hourAndHalf: vrnOneAndHalf.second,
                    twoHours: vrnTwo.second
                },
                months: {
                    hourAndHalf: vrnOneAndHalf.third,
                    twoHours: vrnTwo.third
                },
                group: {
                    hourAndHalf: vrnOneAndHalf.fourth,
                    twoHours: vrnTwo.fourth
                }
            }
        }
        updateData(data, "/courses")
    }

    useEffect(() => {
        setDolgOneAndHalf({
            first: courses.dolgoprudni.firstMonth.hourAndHalf,
            second: courses.dolgoprudni.secondMonth.hourAndHalf,
            third: courses.dolgoprudni.months.hourAndHalf,
            fourth: courses.dolgoprudni.group.hourAndHalf,
        })
        setDolgTwo({
            first: courses.dolgoprudni.firstMonth.twoHours,
            second: courses.dolgoprudni.secondMonth.twoHours,
            third: courses.dolgoprudni.months.twoHours,
            fourth: courses.dolgoprudni.group.twoHours,
        })
        setVrnOneAndHalf({
            first: courses.voronezh.firstMonth.hourAndHalf,
            second: courses.voronezh.secondMonth.hourAndHalf,
            third: courses.voronezh.months.hourAndHalf,
            fourth: courses.voronezh.group.hourAndHalf,
        })
        setVrnTwo({
            first: courses.voronezh.firstMonth.twoHours,
            second: courses.voronezh.secondMonth.twoHours,
            third: courses.voronezh.months.twoHours,
            fourth: courses.voronezh.group.twoHours,
        })
    }, [])

    const handleChange = (e) => {
        const { name, id, value } = e.target

        switch (id) {
            case "dolgOneAndHalf":
                setDolgOneAndHalf({ ...dolgOneAndHalf, [name]: value })
                break
            case "dolgTwo":
                setDolgTwo({ ...dolgTwo, [name]: value })
                break
            case "vrnOneAndHalf":
                setVrnOneAndHalf({ ...vrnOneAndHalf, [name]: value })
                break
            case "vrnTwo":
                setVrnTwo({ ...vrnTwo, [name]: value })
                break
        }
    }

    return (
        <>
            <div className="admin-courses">
                <table>
                    <caption>Долгопрудный</caption>
                    <tr>
                        <th>Абонемент</th>
                        <th>Индивидуально 1 месяц<br />цена за 1 урок</th>
                        <th>Индивидуально 2 месяц<br />цена за 1 урок</th>
                        <th>Индивидуально более 2 мес.<br />цена за 1 урок</th>
                        <th>Групповое</th>
                    </tr>
                    <tr>
                        <td>8 уроков в месяц<br />{"(1 урок 1.5 часа)"}</td>
                        <td><input type="text" name="first" id="dolgOneAndHalf" value={dolgOneAndHalf.first} onChange={handleChange} /></td>
                        <td><input type="text" name="second" id="dolgOneAndHalf" value={dolgOneAndHalf.second} onChange={handleChange} /></td>
                        <td><input type="text" name="third" id="dolgOneAndHalf" value={dolgOneAndHalf.third} onChange={handleChange} /></td>
                        <td><input type="text" name="fourth" id="dolgOneAndHalf" value={dolgOneAndHalf.fourth} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>8 уроков в месяц<br />{"(1 урок 2 часа)"}</td>
                        <td><input type="text" name="first" id="dolgTwo" value={dolgTwo.first} onChange={handleChange} /></td>
                        <td><input type="text" name="second" id="dolgTwo" value={dolgTwo.second} onChange={handleChange} /></td>
                        <td><input type="text" name="third" id="dolgTwo" value={dolgTwo.third} onChange={handleChange} /></td>
                        <td><input type="text" name="fourth" id="dolgTwo" value={dolgTwo.fourth} onChange={handleChange} /></td>
                    </tr>
                </table>
                <table>
                    <caption>Воронеж</caption>
                    <tr>
                        <th>Абонемент</th>
                        <th>Индивидуально 1 месяц<br />цена за 1 урок</th>
                        <th>Индивидуально 2 месяц<br />цена за 1 урок</th>
                        <th>Индивидуально более 2 мес.<br />цена за 1 урок</th>
                        <th>Групповое</th>
                    </tr>
                    <tr>
                        <td>8 уроков в месяц</td>
                        <td><input type="text" name="first" id="vrnOneAndHalf" value={vrnOneAndHalf.first} onChange={handleChange} /></td>
                        <td><input type="text" name="second" id="vrnOneAndHalf" value={vrnOneAndHalf.second} onChange={handleChange} /></td>
                        <td><input type="text" name="third" id="vrnOneAndHalf" value={vrnOneAndHalf.third} onChange={handleChange} /></td>
                        <td><input type="text" name="fourth" id="vrnOneAndHalf" value={vrnOneAndHalf.fourth} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>12 уроков в месяц</td>
                        <td><input type="text" name="first" id="vrnTwo" value={vrnTwo.first} onChange={handleChange} /></td>
                        <td><input type="text" name="second" id="vrnTwo" value={vrnTwo.second} onChange={handleChange} /></td>
                        <td><input type="text" name="third" id="vrnTwo" value={vrnTwo.third} onChange={handleChange} /></td>
                        <td><input type="text" name="fourth" id="vrnTwo" value={vrnTwo.fourth} onChange={handleChange} /></td>
                    </tr>
                </table>
            </div>
            <div className="buttons">
                <Button onClick={save}>Сохранить</Button>
            </div>
            {saved ? <div className="saved">Saved</div> : null}
        </>
    )
}

export default EditCourses
