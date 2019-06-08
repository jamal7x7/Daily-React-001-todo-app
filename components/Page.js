import React from "react"
import { MyTodosProvider } from "./TodosContext"

const Page = ({ children }) => {
  return (
    <MyTodosProvider>
      <div className="page">{children}</div>
    </MyTodosProvider>
  )
}

export default Page
