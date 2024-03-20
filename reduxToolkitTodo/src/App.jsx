import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todo"
import { store } from "./app/store"

function App() {
  
  return (
    <Provider store={store}>
      <h1>welcome to learn about redux</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
