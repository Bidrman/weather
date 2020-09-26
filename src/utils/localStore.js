export const loadStorage = (value = null) => {
  try{
    const serializedData = localStorage.getItem(value || 'state')
    
    if(serializedData === null) {
      return undefined
    }
    //console.log('serializovana data',serializedData)
    return JSON.parse(serializedData)
  }
  catch(err) {
    console.log(err)
    return undefined
  }
}

// const saveStorage = (state) => {
//   try{
//     const serializedData = JSON.stringify(state)
//     localStorage.setItem(state, serializedData)
//   }
//   catch(err){
//     console.log('nastala chyba pri ukladani dat do localStorage: ', err)
//   }
// }

export const saveTodoStorage = (state) => {
  try{
    const serializedData = JSON.stringify(state)
    localStorage.setItem('todos', serializedData)
  }
  catch(err){
    console.log('nastala chyba pri ukladani dat do localStorage: ', err)
  }
}

export const saveWeatherStorage = (state) => {
  try{    
    const serializedData = JSON.stringify(state)
    localStorage.setItem('weather', serializedData)
  }
  catch(err){
    console.log('nastala chyba pri ukladani dat do localStorage: ', err)
  }
}
