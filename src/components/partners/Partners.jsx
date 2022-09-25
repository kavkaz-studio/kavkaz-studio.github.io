import './partners.scss'

const Partners = ({ partners }) => {
  return (
    <div className="partners">
      <div className="partners-container">
        <div>
          {partners.first.title && <h1>{partners.first.title}</h1>}
          {partners.first.owners && partners.first.owners.map((el, i) => <h2 key={i}>{el}</h2>)}
          {partners.first.instagram && <p>Инстаграм: <a href={partners.first.instagram} target="_blank">{partners.first.instagram}</a></p>}
          {partners.first.whatsApp && <p>WhatsApp: <a href={`https://wa.me/${partners.first.whatsApp.replace("+", "")}`} target="_blank">{partners.first.whatsApp}</a></p>}
          {partners.first.mail && <p>Mail: <a href={`mailto:${partners.first.mail}`} target="_blank">{partners.first.mail}</a></p>}
          {partners.first.vk && <p>ВКонтакте: <a href={partners.first.vk} target="_blank">{partners.first.vk}</a></p>}
          {partners.first.phone.lenght !== 0 && <p>Тел: {partners.first.phone.map((el, i) => <a key={i} href={`tel:${el}`}>{el}</a>)}</p>}
        </div>
        <div>
          {partners.second.title && <h1>{partners.second.title}</h1>}
          {partners.second.owners && partners.second.owners.map((el, i) => <h2 key={i}>{el}</h2>)}
          {partners.second.instagram && <p>Инстаграм: <a href={partners.second.instagram} target="_blank">{partners.second.instagram}</a></p>}
          {partners.second.whatsApp && <p>WhatsApp: <a href={`https://wa.me/${partners.second.whatsApp.replace("+", "")}`} target="_blank">{partners.second.whatsApp}</a></p>}
          {partners.second.mail && <p>Mail: <a href={`mailto:${partners.second.mail}`} target="_blank">{partners.second.mail}</a></p>}
          {partners.second.vk && <p>ВКонтакте: <a href={partners.second.vk} target="_blank">{partners.second.vk}</a></p>}
          {partners.second.phone.lenght !== 0 && <p>Тел: {partners.second.phone.map((el, i) => <a key={i} href={`tel:${el}`}>{el}</a>)}</p>}
        </div>
      </div>
    </div>
  )
}

export default Partners