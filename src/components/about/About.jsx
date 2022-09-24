import { useState } from 'react'

import './about.scss'

const About = ({ about }) => {

    const [loaded, setLoaded] = useState(null)

    return (
        <div className="about">
            <div className="about-container">
                <div>
                    <h2>{about.first.title}</h2>
                    <p>{about.first.text}</p>
                    <h2>{about.second.title}</h2>
                    <p>{about.second.text}</p>
                </div>
                <div style={{display: loaded ? "none" : "flex", justifyContent: "center", alignItems: "center"}}><h2>Загрузка...</h2></div>
                <img style={{display: loaded ? "block" : "none"}} src={about.imageUrl} alt="Karen" onLoad={() => setLoaded(true)} />
            </div>
        </div>
    )
}

export default About