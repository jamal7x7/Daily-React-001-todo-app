import { darken, rgba } from "polished"
import React, { useContext, useRef } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import AddTask from "./AddTask"
import InfoHeader from "./InfoHeader"
import TodoCard from "./TodoCard"
import { MyTodosContext } from "./TodosContext"

const Styles = styled.section`
  .scroll {
    height: 600px;
    // background: #000;
    overflow: scroll;
  }
   
svg {
  z-index: 300;
}

  .info-header {
    background: ${({ theme }) => rgba(theme.colors.bgd, 0.8)};
    
    position: sticky;
    backdrop-filter: blur(4px); 
    /* backdrop-filter: blur(4px) saturate(180%);  */
    top: 0;
    z-index: 1000;
  }

  .list {
    // margin: 80px;
    // background: red;
    margin-top: 20px;
  }
  
  .options:hover .deleteIcon {
    fill: ${({ theme }) => theme.colors.primary};;
    opacity: 1;
  }

  .options-dropdown {
    position: relative;
    /* display: inline-block; */
    z-index: 200;
    
  }
  .options-content {
    /* display: none; */
    right: 10px;
    top: 20px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bgm};
    border-radius: 8px;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display: block;
    z-index: 1;

    

    .options-content-text {
      padding: 16px;
      display: grid;
      grid-template-columns: 40px 1fr;
      grid-template-rows: auto;
      align-items: center;
    }
    .options-content-text:hover {
      background:#00000020;
      /* color:${({ theme }) => theme.colors.primary};  */
      color: ${({ theme }) => theme.colors.text}; 
      /* background: ${({ theme }) => theme.colors.primary};  */
      
    }

    
  }

    .draging-over {
      background-color: ${({ theme }) => theme.colors.bgm}; 
    }

    .not-draging-over {
      background-color: ${({ theme }) => theme.colors.bgd}; 
    }
    
  }
  /* .options-dropdown:hover .options-content {
    display: block;
  } */
`

const CardContainer = styled.div`
  background-color: ${props =>
    props.isDragging
      ? ({ theme }) => darken(0.02, theme.colors.bgd)
      : ({ theme }) => theme.colors.bgd};
`

const TodoList = ({
  // todos,
  handleOnDragEnd,
  handleCheckBox,
  // handleDeleteTodo,
  addTaskIsShown,
  // inputRef,
  handleAddTask
  // handleSubmit
}) => {
  // const props = useSpring({
  //   opacity: 1,
  //   // transform: ${props => scale(1.3)},
  //   from: { opacity: 0 },

  //   config: { duration: 250 }
  // })

  const inputRef = useRef()
  const { todos, dispatch } = useContext(MyTodosContext)

  const handleSubmit = e => {
    e.preventDefault()
    const text = inputRef.current.value
    if (text) {
      dispatch({
        type: "ADD",
        text: text,
        id: Date.now(),
        completed: false
      })
    }

    inputRef.current.value = ""
  }

  return (
    <Styles>
      <div className="scroll">
        <div className="info-header">
          <InfoHeader />
        </div>

        <div className="list">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={
                    snapshot.isDraggingOver
                      ? "draging-over"
                      : "not-draging-over"
                  }
                >
                  {todos.map((t, i) => (
                    <TodoCard
                      {...t}
                      handleCheckBox={handleCheckBox}
                      // handleDeleteTodo={handleDeleteTodo}
                      i={i}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <AddTask
          addTaskIsShown={addTaskIsShown}
          inputRef={inputRef}
          handleAddTask={handleAddTask}
          handleSubmit={handleSubmit}
        />
      </div>
    </Styles>
  )
}

export default TodoList
