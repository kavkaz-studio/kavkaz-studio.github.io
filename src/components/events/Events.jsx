import { useState } from 'react'

import './events.scss'

const Events = ({ events }) => {
    
    const [openedImage, setOpenedImage] = useState({
        opened: false,
        url: ""
    })

    return (
        <>
            <div className="events">
                <div className="events-container">
                    <h2>{events.title}</h2>
                    <div className="events-images">
                        {events.data.map(({ images, text }, i) => {
                            return <div key={i} className="event-wrapper">
                                <div className="event-text-wrapper">
                                    <p>{text}</p>
                                </div>
                                <div className="event-images-wrapper">
                                    {images.map((el, i) => el !== "" && <img key={i} src={el} alt="event_img" onClick={() => setOpenedImage({opened: true, url: el})} />)}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            {openedImage.opened && <div className="events-open-image" onClick={() => setOpenedImage({opened: false, url: ""})}>
                <img src={openedImage.url} alt="event_img" />
            </div>}
        </>
    )
}

export default Events
