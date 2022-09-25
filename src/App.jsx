import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { child, get } from "firebase/database"

import { dbRef } from './firebase/firebase'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Comments from './components/comments/Comments'
import Prices from './components/prices/Prices'
import Partners from './components/partners/Partners'
import Contacts from './components/contacts/Contacts'
import Admin from './components/admin/Admin.jsx'
import Events from './components/events/Events'

import './app.scss'

const App = () => {

    const [data, setData] = useState({})
    const [state, setState] = useState(false)
    const [divStyle, setDivStyle] = useState({})
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)

        get(child(dbRef, "/")).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val())
                setTimeout(() => setState(true), 2500)
                setLoading(false)
            } else {
                console.log("No data available")
            }
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    useEffect(() => {
        if (window.matchMedia('(min-width: 800px)').matches) {
            setDivStyle({
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${data?.home?.background}")`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "100%",
                backgroundPosition: "0% 30%"
            })
        } else {
            setDivStyle({
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${data?.home?.background}")`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "auto",
                backgroundPosition: "center"
            })
        }
    }, [data])

    return loading
        ? <div className="main loading">
            <div>
                <h1>Загрузка...</h1>
            </div>
        </div>
        : state
            ? <div style={divStyle} className="main finish">
                <Routes basename="/kavkaz-studio">
                    <Route path="/kavkaz-studio" element={<Navigation home={data.home} />}>
                        <Route index element={<Home home={data.home} />} />
                        <Route path="/kavkaz-studio/about" element={<About about={data.about} />} />
                        <Route path="/kavkaz-studio/comments" element={<Comments comments={data.comments} />} />
                        <Route path="/kavkaz-studio/courses" element={<Prices prices={data.courses} />} />
                        <Route path="/kavkaz-studio/partners" element={<Partners partners={data.partners} />} />
                        <Route path="/kavkaz-studio/contacts" element={<Contacts contacts={data.contacts} />} />
                        <Route path="/kavkaz-studio/events" element={<Events events={data.events} />} />
                    </Route>
                    <Route path="/kavkaz-studio/admin" element={<Admin data={data} />} />
                </Routes>
            </div>
            : <div className="main welcome">
                <div>
                    <img className="welcome-logo" src={data?.home?.icon} alt="logo" />
                    <h1>Kavkaz Studio</h1>
                </div>
            </div>
}

export default App