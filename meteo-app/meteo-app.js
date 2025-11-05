const OPENMETEOURL =
  'https://api.open-meteo.com/v1/forecast?latitude=41.5999&longitude=13.4923&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1'

const getWeather = function () {
  fetch(OPENMETEOURL)
    .then((response) => {
      if (response.ok === true) {
        // solo qui dentro io proseguo cercando di recuperare il body
        return response.json()
      } else {
        // qui dentro finite in caso di 401, 404, 500, etc.
        // come gestiamo questo errore? ricicliamo il blocco catch...
        // mi teletrasporto nel blocco catch, faccio "harakiri"
        throw new Error('Errore nella risposta!')
      }
    })
    .then((datiMeteo) => {
      console.log('datimeteo', datiMeteo)
      console.log('TEMPERATURA CORRENTE', datiMeteo.current.temperature_2m)
      console.log('TEMPERATURA MASSIMA', datiMeteo.daily.temperature_2m_max[0])
      console.log('TEMPERATURA MINIMA', datiMeteo.daily.temperature_2m_min[0])
      const minSpan = document.getElementById('min-temp')
      const maxSpan = document.getElementById('max-temp')
      minSpan.innerText = datiMeteo.daily.temperature_2m_min[0]
      maxSpan.innerText = datiMeteo.daily.temperature_2m_max[0]

      //   metto anche la temp corrente
      const currentTempSpan = document.getElementById('current-temp')
      currentTempSpan.innerText = datiMeteo.current.temperature_2m
    })
    .catch((err) => {
      console.log('ERRORE!', err)
    })
}

getWeather()
