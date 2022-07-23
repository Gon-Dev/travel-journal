import geolocationIcon from '../assets/geolocation-icon.svg'
export const Location = (props) => {
  console.log(props.data);
  return (
      <section className='location-wrapper'>
          <img className='location-img' alt='location landscape' src={props.data.imageUrl}></img>
          <div className='location-data-wrapper'>
              <header className='location-data-header'>
                <img className='location-icon' src={geolocationIcon} alt='geolocation icon'/>
                <p className='location-name'>{props.data.location}</p>
                <a className='location-gm-link' href={props.data.googleMapsUrl} rel="noreferrer" target="_blank">View on Google Maps</a>
              </header>
              <h2 className='location-title'>{props.data.title}</h2>
              <p className='location-dates'><strong>{props.data.startDate} - {props.data.endDate}</strong></p>
              <p className='location-description'>{props.data.description}</p>
          </div>
      </section>
  )
}