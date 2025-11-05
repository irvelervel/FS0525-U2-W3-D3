// CODICE ASINCRONO IN JS
// Normalmente, la maggior parte delle operazioni che abbiamo fatto
// in JS sono state operazioni "sincrone"

const x = 10
const arr = ['ciao', 'sono', 'stefano']
const newArr = arr.map((s) => {
  return s.toUpperCase()
})
// console.log(x)

// MA ESISTE UNA TIPOLOGIA DI OPERAZIONI CHE NECESSITANO DI TEMPO
// PER ESSERE COMPLETATE, ad es. setTimeout

setTimeout(() => {
  console.log('1')
}, 3000)
console.log('2')

// storicamente, questo problema si risolveva con le CALLBACKS
// una CALLBACK è una FUNZIONE passata come PARAMETRO ad un'altra FUNZIONE

// grazie ad una CALLBACK noi possiamo fornire ad una funzione che esegue
// un'operazione asincrona "COSA FARE DOPO"
// ad es. ad una funzione che recupera asincronicamente i dati dai server
// di Amazon sugli ordini potrebbe ricevere un parametro, la funzione
// che una volta recuperati i dati manipolerà il dom a partire da essi

const manipolaDom = function () {
  console.log('ORA MANIPOLO IL DOM CON I DATI OTTENUTI')
}

const chiamataAsincrona = function (f) {
  console.log('ORA COMINCIO A RECUPERARE I DATI DA AMAZON')
  setTimeout(() => {
    console.log('DATI DA AMAZON RECUPERATI!')
    f() // <-- così posso controllare il flusso di operazioni
  }, 2000)
}

chiamataAsincrona(manipolaDom)
// manipolaDom() // <-- non funzionerebbe!
