import './prices.scss'

const Prices = ({ prices }) => {
  return (
    <div className="prices">
      <div className="prices-container">
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
            <td>{prices.dolgoprudni.firstMonth.hourAndHalf}</td>
            <td>{prices.dolgoprudni.secondMonth.hourAndHalf}</td>
            <td>{prices.dolgoprudni.months.hourAndHalf}</td>
            <td>{prices.dolgoprudni.group.hourAndHalf}</td>
          </tr>
          <tr>
            <td>8 уроков в месяц<br />{"(1 урок 2 часа)"}</td>
            <td>{prices.dolgoprudni.firstMonth.twoHours}</td>
            <td>{prices.dolgoprudni.secondMonth.twoHours}</td>
            <td>{prices.dolgoprudni.months.twoHours}</td>
            <td>{prices.dolgoprudni.group.twoHours}</td>
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
            <td>{prices.voronezh.firstMonth.hourAndHalf}</td>
            <td>{prices.voronezh.secondMonth.hourAndHalf}</td>
            <td>{prices.voronezh.months.hourAndHalf}</td>
            <td>{prices.voronezh.group.hourAndHalf}</td>
          </tr>
          <tr>
            <td>12 уроков в месяц</td>
            <td>{prices.voronezh.firstMonth.twoHours}</td>
            <td>{prices.voronezh.secondMonth.twoHours}</td>
            <td>{prices.voronezh.months.twoHours}</td>
            <td>{prices.voronezh.group.twoHours}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Prices