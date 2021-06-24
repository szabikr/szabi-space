// import { useState, useEffect } from 'react'

export default function Weather() {
  // const [lat, setLat] = useState(null)
  // const [long, setLong] = useState(null)
  // const [data, setData] = useState([])
  const data = []

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setLat(latitude)
  //       setLong(longitude)
  //     })
   
  //     if (lat === null || long === null){
  //       return
  //     }

  //     await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setData(result)
  //       })
  //   }
  //   fetchData();
  // }, [lat, long])

  if (typeof data.main == 'undefined') {
    return <div>Weather based on location will display here...</div>
  }
  
  return (
    <div>
      <div>
        {data.name}
      </div>
      <div>
        <code style={{ fontSize: '2.8em' }}>{data.main.temp}{' '}°C</code>
        <div style={{ fontSize: '1.2em' }}>
          feels like{' '}
          <strong><code>{data.main.feels_like}{' '}°C</code></strong>
        </div>
      </div>
    </div>
  )
}
