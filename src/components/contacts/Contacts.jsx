import './contacts.scss'

const Contacts = ({ contacts }) => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div>
          <h2>Наши адреса</h2>
          <div>
            <h3>{contacts.addresses.voronezh.city}</h3>
            {contacts.addresses.voronezh.more.map((el, i) => <p key={i}>{el}</p>)}
            <h3>{contacts.addresses.dolgoprudni.city}</h3>
            {contacts.addresses.dolgoprudni.more.map((el, i) => <p key={i}>{el}</p>)}
          </div>
        </div>
        <div>
          <h2>Наши контакты</h2>
          <div>
            {contacts.mail && <p>Mail: <a href={`mailto:${contacts.mail}`} target="_blank">{contacts.mail}</a></p>}
            {contacts.phone && <p>Тел: {contacts.phone.map((el, i) => <a key={i} href={`tel:${el}`}>{el}</a>)}</p>}
            {contacts.instagram && <p>Инстаграм: <a href={contacts.instagram} target="_blank">{contacts.instagram}</a></p>}
            {contacts.vk && <p>ВКонтакте: <a href={contacts.vk} target="_blank">{contacts.vk}</a></p>}
            {contacts.whatsApp && <p>WhatsApp: <a href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`} target="_blank">{contacts.whatsApp}</a></p>}
            {contacts.telegram && <p>Телеграм: <a href={contacts.telegram} target="_blank">{contacts.telegram}</a></p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts