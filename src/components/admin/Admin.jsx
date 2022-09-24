import { useState, useEffect } from 'react';

import EditHome from './edit-components/EditHome'
import EditAbout from './edit-components/EditAbout';
import EditComments from './edit-components/EditComments';
import EditCourses from './edit-components/EditCourses';
import EditPartners from './edit-components/EditPartners';
import EditContacts from './edit-components/EditContacts';
import EditEvents from './edit-components/EditEvents';

import './admin.scss'
import { Link } from 'react-router-dom';

const Admin = ({ data }) => {

    const navItems = ["Отзывы", "Главная", "О Нас", "События", "Обучения", "Партнёры", "Контакты"]
    const [editPage, setEditPage] = useState("Отзывы")
    const [editData, setEditData] = useState(<EditHome />)

    useEffect(() => {
        switch (editPage) {
            case "Главная":
                setEditData(<EditHome home={data.home} />)
                break
            case "О Нас":
                setEditData(<EditAbout about={data.about} />)
                break
            case "Отзывы":
                setEditData(<EditComments comments={data.comments} />)
                break
            case "События":
                setEditData(<EditEvents events={data.events} />)
                break
            case "Обучения":
                setEditData(<EditCourses courses={data.courses} />)
                break
            case "Партнёры":
                setEditData(<EditPartners partners={data.partners} />)
                break
            case "Контакты":
                setEditData(<EditContacts contacts={data.contacts} />)
                break
            default:
                return null
        }
    }, [editPage])

    return (
        <div className="admin">
            <div className="admin-navbar">
                <ul>
                    {navItems.map((el, i) => <li key={i} onClick={() => setEditPage(el)}>{el}</li>)}
                    <li><Link to="/kavkaz-studio">Зайти На Сайт</Link></li>
                </ul>
            </div>
            <div className="admin-container">
                <h1>{editPage}</h1>
                {editData}
            </div>
        </div>
    );
}

export default Admin;