import { useContext } from "react"
import MyTodosContext from "./TodosContext"

export default function Data() {
  const MyTodoData = useContext(MyTodosContext)

  return <h2> My Todos Data: {MyTodoData.a}</h2>
}
