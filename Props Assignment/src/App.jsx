import Person from './Person'
import Button from './Button'
import Header from './Header'
import Todo from './Todo'
import './App.css'

function App() {
  

  return (
    <>
        <Header title='Welcome To My Website' />
      <Person name = "Tanxeem" age = "30" />
      <Button />
      <br />
      <Todo / >
    </>
  )
}

export default App
