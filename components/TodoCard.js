import { darken, lighten, saturate } from "polished"
import React, { useContext, useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { CheckBoxSvg, GrabSvg, HexBorderSvg } from "../components/svg"
import { MyTodosContext } from "./TodosContext"

const Styles = styled.section`

  
  .todoCard {
    cursor: pointer;
    display: grid;
    grid-template-columns: 56px 40px 1fr;
    grid-template-rows: 52px;
    color: ${({ theme }) => theme.colors.textLight};;;

    &:hover {
      background: ${({ theme }) => darken(0.02, theme.colors.bgd)}
      // box-sizing: border-box;
      // border-top: 1px solid $bgl;
      // border-bottom: 1px solid $bgl;
      // border-top: 1px solid rgba(#fff, 0.08);
      // border-bottom: 1px solid rgba(#fff, 0.08);
      // box-shadow: 0px 1px 0px #192b4d inset;
    }

    // &:hover .dot {
    /* //   border-top: 1px solid rgba(#00000020, 0.08); */
    /* //   border-bottom: 1px solid rgba(#00000020, 0.08); */
    // }

    &:hover .checkbox{
      transform: scale(1.05);
    }
    .checkbox:hover {
      #checkbox-bg{
        /* fill: ${({ theme }) => lighten(0.05, theme.colors.primary)}; */
        stroke: ${({ theme }) => saturate(0.5, theme.colors.primary)};
      }
      #check {
        fill: ${({ theme }) => lighten(0, theme.colors.bgl)};
        
      }
    }

    &:hover .options {
      opacity: 1;
    }

    &:hover .grab {
      /* opacity: 0.3; */
    }
  }

  .grab {
    grid-area: "grab";
    
    display: grid;
    place-items: center;
    opacity: 0;
    transform: scale(0.7);
  }
  
  .grab:hover {
    opacity: 1;
    fill: ${({ theme }) => theme.colors.primary};
  }

  .checkbox {
    grid-area: "checkbox";
    display: grid;
    place-items: center;
    // background: #3a3a3a;
  }
  .todoText {
    margin-left: 16px;
    font-size: 14px;
    box-sizing: border-box;
    grid-area: "todoText";
    // border-bottom: 1px solid rgba(#fff, 0.08);
    // border-bottom: 3px solid #00000020;
    /* border-bottom: 1px solid #192b4d; */
    display: grid;
    place-items: center left;
    // background: #5a56f8;
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-template-rows: auto;
    .text {
      display: grid;
      place-items: center start;
      
    }
    .text-bar {
      display: grid;
      place-items: center start;
      color: ${({ theme }) => theme.colors.textLight};
      text-decoration: line-through;
      text-decoration-color:${({ theme }) => theme.colors.primary}; 
      text-decoration-style: wavy;
    }
    .options {
      display: flex;
      justify-content: flex-end;
      opacity: 0;
      .delete-icon {
        z-index: 10;
        display: none;
      }
    }
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

const TodoCard = ({
  id,
  text,
  completed,
  handleCheckBox,
  // handleDeleteTodo,
  i
}) => {
  const { dispatch } = useContext(MyTodosContext)
  const [optionsMenuIsShown, setOptionsMenuIsShown] = useState(false)
  // const handleOptionsMenu = e => {
  //   e.preventDefault()
  //   setOptionsMenuIsShown(prev => !prev)
  // }

  const handleDeleteTodo = (e, id) => {
    e.preventDefault()
    // console.log("done")

    dispatch({
      type: "DELETED",
      id: id
    })

    setOptionsMenuIsShown(prev => !prev)
  }
  const handleExpandCard = (e, id) => {
    e.preventDefault()
    // console.log("done")

    // setOptionsMenuIsShown(prev => !prev)
  }

  const sp = useSpring({
    // opacity: optionsMenuIsShown ? 1 : 0,
    transform: optionsMenuIsShown ? "scale(1)" : "scale(0.1)",
    // from: { opacity: 0 },
    // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",

    // config: { duration: 150 },
    config: { mass: 1, tension: 500, friction: 30 }
  })

  return (
    <Styles>
      <Draggable key={id} draggableId={id} index={i}>
        {(provided, snapshot) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <div
              className="todoCard"
              key={id}
              onClick={e => handleExpandCard(e, id)}
            >
              <div className="grab">
                <GrabSvg />
              </div>

              <div className="checkbox" onClick={e => handleCheckBox(e, id)}>
                {completed ? <CheckBoxSvg /> : <HexBorderSvg color={"red"} />}
              </div>

              <div className="todoText">
                {!completed ? (
                  <p className="text">{text}</p>
                ) : (
                  <p className="text-bar">{text}</p>
                )}
                <div className="options">
                  <svg
                    className="delete-icon"
                    onClick={e => handleDeleteTodo(e, id)}
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <g opacity="0.33">
                      <path
                        d="M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z"
                        fill="#073175"
                      />
                      <path
                        d="M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z"
                        stroke="#C4C4C4"
                        stroke-opacity="0"
                        stroke-width="2"
                      />
                    </g>

                    <g>
                      <path
                        className="deleteIcon"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 11C11.8954 11 11 11.8954 11 13V21C11 22.1046 11.8954 23 13 23H19C20.1046 23 21 22.1046 21 21V13C21 11.8954 20.1046 11 19 11H13ZM17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V16ZM19 15C19.5523 15 20 15.4477 20 16V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V16C18 15.4477 18.4477 15 19 15ZM14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16V20C12 20.5523 12.4477 21 13 21C13.5523 21 14 20.5523 14 20V16Z"
                        fill="#4c5f7e"
                        // opacity="1"
                      />
                      <rect
                        className="deleteIcon"
                        x="18"
                        y="9"
                        width="2"
                        height="4"
                        rx="1"
                        transform="rotate(90 18 9)"
                        fill="#4c5f7e"
                        // opacity="1"
                      />
                      <rect
                        className="deleteIcon"
                        x="22"
                        y="10"
                        width="4"
                        height="12"
                        rx="2"
                        transform="rotate(90 22 10)"
                        fill="#4c5f7e"
                        // opacity="1"
                      />
                    </g>
                  </svg>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    onClick={() => setOptionsMenuIsShown(!optionsMenuIsShown)}
                  >
                    <g opacity="0.33">
                      <path
                        d="M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z"
                        fill="#073175"
                      />
                      <path
                        d="M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z"
                        stroke="#C4C4C4"
                        stroke-opacity="0"
                        stroke-width="2"
                      />
                    </g>
                    <path
                      className="deleteIcon"
                      d="M9.9 13.8887C10.2094 13.71 10.5906 13.71 10.9 13.8887L11.9785 14.5113C12.2879 14.69 12.4785 15.0201 12.4785 15.3774V16.6227C12.4785 16.9799 12.2879 17.31 11.9785 17.4887L10.9 18.1113C10.5906 18.29 10.2094 18.29 9.9 18.1113L8.82154 17.4887C8.51214 17.31 8.32154 16.9799 8.32154 16.6227V15.3774C8.32154 15.0201 8.51214 14.69 8.82154 14.5113L9.9 13.8887Z"
                      fill="#4c5f7e"
                    />
                    <path
                      className="deleteIcon"
                      d="M15.5 13.8887C15.8094 13.71 16.1906 13.71 16.5 13.8887L17.5784 14.5113C17.8878 14.69 18.0784 15.0201 18.0784 15.3774V16.6227C18.0784 16.9799 17.8878 17.31 17.5784 17.4887L16.5 18.1113C16.1906 18.29 15.8094 18.29 15.5 18.1113L14.4215 17.4887C14.1121 17.31 13.9215 16.9799 13.9215 16.6227V15.3774C13.9215 15.0201 14.1121 14.69 14.4215 14.5113L15.5 13.8887Z"
                      fill="#4c5f7e"
                    />
                    <path
                      className="deleteIcon"
                      d="M21.1 13.8887C21.4094 13.71 21.7906 13.71 22.1 13.8887L23.1785 14.5113C23.4879 14.69 23.6785 15.0201 23.6785 15.3774V16.6227C23.6785 16.9799 23.4879 17.31 23.1785 17.4887L22.1 18.1113C21.7906 18.29 21.4094 18.29 21.1 18.1113L20.0216 17.4887C19.7121 17.31 19.5216 16.9799 19.5216 16.6227V15.3774C19.5216 15.0201 19.7122 14.69 20.0216 14.5113L21.1 13.8887Z"
                      fill="#4c5f7e"
                    />
                  </svg>

                  {optionsMenuIsShown && (
                    <animated.div style={sp} className="options-dropdown">
                      <div className="options-content">
                        <div className="options-content-text">
                          <p> || </p>
                          <p>Edit</p>
                        </div>
                        <div className="options-content-text">
                          <p> || </p>
                          <p>Add to Project</p>
                        </div>
                        <div className="options-content-text">
                          <p> || </p>
                          <p>Priority</p>
                        </div>
                        <div
                          className="options-content-text"
                          onClick={e => handleDeleteTodo(e, id)}
                        >
                          <svg
                            className="delete-icon-svg"
                            onClick={e => handleDeleteTodo(e, id)}
                            width="31"
                            height="31"
                            viewBox="0 0 31 31"
                            fill="none"
                          >
                            <g opacity="0.33">
                              <path
                                d="M11.5 2.3094C13.9752 0.880339 17.0248 0.880339 19.5 2.3094L24.9234 5.4406C27.3986 6.86966 28.9234 9.51068 28.9234 12.3688V18.6312C28.9234 21.4893 27.3986 24.1303 24.9234 25.5594L19.5 28.6906C17.0248 30.1197 13.9752 30.1197 11.5 28.6906L6.07661 25.5594C3.6014 24.1303 2.07661 21.4893 2.07661 18.6312V12.3688C2.07661 9.51068 3.6014 6.86966 6.07661 5.4406L11.5 2.3094Z"
                                fill="#073175"
                              />
                              <path
                                d="M19 3.17543L24.4234 6.30662C26.5892 7.55705 27.9234 9.86794 27.9234 12.3688V18.6312C27.9234 21.1321 26.5892 23.4429 24.4234 24.6934L19 27.8246C16.8342 29.075 14.1658 29.075 12 27.8246L6.57661 24.6934C4.4108 23.4429 3.07661 21.1321 3.07661 18.6312V12.3688C3.07661 9.86794 4.4108 7.55705 6.57661 6.30662L12 3.17543C14.1658 1.925 16.8342 1.925 19 3.17543Z"
                                stroke="#C4C4C4"
                                stroke-opacity="0"
                                stroke-width="2"
                              />
                            </g>

                            <g>
                              <path
                                className="deleteIcon"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13 11C11.8954 11 11 11.8954 11 13V21C11 22.1046 11.8954 23 13 23H19C20.1046 23 21 22.1046 21 21V13C21 11.8954 20.1046 11 19 11H13ZM17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V16ZM19 15C19.5523 15 20 15.4477 20 16V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V16C18 15.4477 18.4477 15 19 15ZM14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16V20C12 20.5523 12.4477 21 13 21C13.5523 21 14 20.5523 14 20V16Z"
                                fill="#4c5f7e"
                                // opacity="1"
                              />
                              <rect
                                className="deleteIcon"
                                x="18"
                                y="9"
                                width="2"
                                height="4"
                                rx="1"
                                transform="rotate(90 18 9)"
                                fill="#4c5f7e"
                                // opacity="1"
                              />
                              <rect
                                className="deleteIcon"
                                x="22"
                                y="10"
                                width="4"
                                height="12"
                                rx="2"
                                transform="rotate(90 22 10)"
                                fill="#4c5f7e"
                                // opacity="1"
                              />
                            </g>
                          </svg>

                          <p>Delete</p>
                        </div>
                      </div>
                    </animated.div>
                  )}
                </div>
              </div>
            </div>
          </CardContainer>
        )}
      </Draggable>
    </Styles>
  )
}

export default TodoCard
