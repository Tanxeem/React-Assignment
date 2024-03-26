import Person from './Person'
import Button from './Button'
import Header from './Header'
// import List from './List'
import './App.css'

function App() {
  

  return (
    <>
        <Header title='Welcome To My Website' />
      <Person name = "Tanxeem" age = "30" />
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />
    </>
  )
}

export default App
