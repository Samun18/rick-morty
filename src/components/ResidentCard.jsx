/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/ResidentCard.css'

const ResidentCard = ({ url }) => {

  const [resident, getResident]= useFetch(url)
  
  useEffect(() => {
    getResident()
  }, [])

  console.log(resident?.status)
  
  return ( 
    <article className='card'>
        <header className='card__header'>
            <img src={resident?.image} alt="" />
            <div className='card__status'>
                <span className={`dot ${resident?.status}-color`}></span>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li className='card__li'><span>Specie:</span><span></span>{resident?.species}</li>
                <li className='card__li'><span>Origin:</span><span>{resident?.origin.name}</span></li>
                <li className='card__li'><span>Episodes where appear:</span>{resident?.episode.length}<span></span></li>
            </ul>
        </section>

    </article>
  )
}

export default ResidentCard