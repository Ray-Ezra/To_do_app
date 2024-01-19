import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './Redux/store'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <Todo/>
    </Provider>
  )
}

export default App
