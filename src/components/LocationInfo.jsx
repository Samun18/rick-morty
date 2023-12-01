/* eslint-disable react/prop-types */
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => { 
  return (
    <article className='container__info'>
      <h2 className='container__info__h2'>{location?.name}</h2>
      <ul className='container__info__ul'>
        <li className='container__info__li'><span>Type:</span><span>{location?.type}</span></li>
        <li className='container__info__li'><span>Dimension:</span>{location?.dimension || 'unknow'}<span></span></li>
        <li className='container__info__li'><span>Population:</span>{location?.residents.length}<span></span></li>
      </ul>
    </article>
  )
}

export default LocationInfo