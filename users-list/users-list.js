// oggi, per la prima volta, creerermo una lista di utenti che NON
// abbiamo scritto noi :)
// li recupereremo da JSON Placeholder facendo una HTTP REQUEST; otterremo indietro
// una HTTP RESPONSE contenente i dati richiesti

// in JS esiste un metodo integrato per effettuare una HTTP REQUEST
// questo metodo si chiama fetch
// fetch TORNA una PROMISE

// !!! NON FATE COSÌ !!!
// const response = fetch() // <-- SBAGLIATISSIMO
// facendo così JS assegnerebbe alla riga 11 immediatamente il risultato di fetch
// il risultato così ottenuto sarebbe una Promise in stato ancora di PENDING

const jsonPlaceholderURL = 'https://jsonplaceholder.typicode.com/users'

const getData = function () {
  // utilizzo il metodo FETCH per richiedere i dati alla API
  fetch(
    jsonPlaceholderURL
    // {
    // questo secondo parametro se c'è, è sempre UN OGGETTO
    // rappresenta la CONFIGURAZIONE di questa HTTP REQUEST
    // method: 'GET' // <-- se il metodo è GET, è sottointeso!
    // body: // <-- il body nelle chiamate GET non si usa mai! solo in POST e PUT
    // headers: {
    // 'Content-Type': 'application/json' // va a descrivere il tipo di payload allegato
    // ma abbiamo detto che nelle chiamate GET non c'è payload e quindi non c'è neanche 'Content-Type'
    // authorization: // token per l'autenticazione, JSON placeholder non lo utilizza
    // }
    // quindi, in soldoni, se state contattando un'API libera, gratuita, senza
    // autorizzazione e state facendo una chiamata GET è sufficiente il primo
    // parametro di fetch, ovvero l'URL :)
    // }
  )
    .then((res) => {
      // qui dentro scriviamo il FINALE BUONO (perchè otteniamo la response)
      console.log('RESPONSE', res)
      // dentro la res però NON troverete il JSON della response, perchè
      // potrebbe essere enorme e hanno deciso di separarlo in un "ulteriore step"
      // il body della response viene fornito dal risultato dell'esecuzione
      // del metodo .json() sulla response, però .json() è un metodo ASINCRONO
      // (torna una Promise) e va aspettato!
      return res.json() // <-- attenderò i suoi finali con i .then e i .catch successivi
    })
    .then((data) => {
      // nel parametro di questo secondo then troverò il BODY della response
      // nel nostro caso (/users) l'array di utenti! :)
      console.log('DATA', data)
      // qui dentro avete data! tutto quello che volete farci dovete farlo qua!
      data.forEach((utente) => {
        const newLi = document.createElement('li') // <li></li>
        newLi.innerText = utente.name + ' ' + utente.phone
        newLi.classList.add('list-group-item')
        document.getElementById('list').appendChild(newLi)
      })
    })
    .catch((err) => {
      // qui dentro scriviamo il FINALE CATTIVO
      // entriamo qui dentro se NON siamo riusciti ad ottenere una response
      // problema con internet? server inesistente? etc.
      console.log('Errore nella request', err)
    })
}

getData()
