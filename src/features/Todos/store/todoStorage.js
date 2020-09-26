export const loadTodoStorage = (value = null) => {
  try{
    const serializedData = localStorage.getItem(value = 'todos')
      
    if(serializedData === null) {
      return undefined
    }
    
    return JSON.parse(serializedData)
  }
  catch(err) {
    console.log(err)
    return undefined
  }
}
  
export const saveTodoStorage = (todos) => {
  try{
    const serializedData = JSON.stringify(todos)
    localStorage.setItem('todos', serializedData)
  }
  catch(err){
    console.log('nastala chyba pri ukladani dat do localStorage: ', err)
  }
}
  