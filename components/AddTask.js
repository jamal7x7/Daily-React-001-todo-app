import { lighten, rgba } from 'polished';
import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import FormTabContent from '../components/FormTabContent';
import { AddTaskSvg, DatePickerSvg, DeleteTaskSvg, HexBorderSvg, PrioritySvg, ProjectSvg, SubmitSvg } from './svg';
import { MyTodosContext } from './TodosContext';

const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  padding: 13px 20px;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  background: ${props => (props.primary ? '#8c4ef8' : 'transparent')};
  &:hover {
    color: #fff;
    background: ${props =>
      props.primary ? lighten(0.05, '#8c4ef8') : 'transparent'};
  }
`

const AddTaskButton = styled.div`
  display: inline-block;
  height: 52px;
  z-index: 3000000;
}
`

const AddTaskCard = styled.div`
  display: grid;
  grid-template-columns: 56px 40px 1fr;
  grid-template-rows: 52px;

  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  div {
    grid-area: 'dot';
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Dot = styled.div`
  grid-area: 'dot';
`

const Icon = styled.div`
  grid-area: 'addIcon';
  display: grid;
  place-items: center;
  /* background: #000; */
  .active {
    background: #00f;
  }
`

const AddText = styled.div`
  opacity: 1;
  margin-left: 16px;
  font-size: 14px;
  grid-area: 'addText';
  /* background: #5a56f8; */
  display: grid;
  place-items: center left;
  height: 52px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`
const Form = styled.form`
  box-sizing: border-box; 
  margin-left: 96px;
  margin-top: -56px;
  height: 52px;
  /* padding: 25px; */
  /* background: ${({ theme }) => theme.colors.bgm}; */

  width: 80%;
  /* box-shadow: 0 50px 10px -20px #00000033; */
  /* box-shadow: 0 90px 100px  ${rgba(255, 2, 0, 0.7)}
    0 10px 10px 10px rgba(red, 0.7); */
 

  
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: auto;
  background: #00000033;
  border-radius: 8px;
  margin-bottom: 16px;
  /* padding: 13px 16px; */
  /* margin-bottom: 16px; */
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  padding-left: 13px;
  border: none;
  background: #00000008;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  &:hover :placeholder-shown {
    background: #00000020;
    border-radius: 8px;
  }
`

const Card = styled.form`
  margin-top: 0;
  padding: 25px;
  background: ${({ theme }) => theme.colors.bgm};

  border-radius: 8px;
  box-shadow: 0 90px 100px -50px rgba(black, 0.4),
    0 50px 70px 10px rgba(black, 0.1);

  .FormContent {
    /* background: #000; */
    height: 60px;

    overflow-y: scroll;
  }

  hr {
    opacity: 0.1;
  }
`

const FormBtns = styled.div`
  margin-bottom: -20px;
  display: grid;
  grid-template-columns: 40px 40px 40px 1fr;
  grid-template-rows: 1fr;
  place-items: center start;
  position: relative;

  .big-svg {
    top: -30px;
    justify-self: end;
    position: absolute;
    justify-self: end;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
      svg > path {
        fill: ${({ theme }) => lighten(0.05, theme.colors.primary)};
      }
    }
  }
`

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1
// ]
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AddTask = ({ addTaskIsShown, handleSubmit, handleAddTask, inputRef }) => {
  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 10, tension: 1000, friction: 100 }
  // }))

  const [state, toggle] = useState(false)
  const [tab, setTab] = useState('projectTab')

  const p = useSpring({
    // opacity: state ? 1 : 0,
    // transform: state ? "rotate(45deg)" : "rotate(0)",
    transform: `rotate(${state ? 135 : 0}deg ) `,
    // transformOrigin: "center",
    // from: { opacity: 0 },
    // color: !optionsMenuIsShown ? "tomato" : "#8c4ef8",

    // config: { duration: 150 },
    config: { mass: 1, tension: 500, friction: 20 }
  })

  const fip = useSpring({
    opacity: state ? 1 : 0,
    transformOrigin: 'left',
    transform: state
      ? 'scaleX(1) translateX(0px)  '
      : 'scaleX(0.9) translateX(-20px) ',

    config: { mass: 1, tension: 500, friction: 30, clamp: false }
    // onRest: () => inputRef.current.focus()
  })

  const fbp = useSpring({
    opacity: state ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    transformOrigin: 'top',
    transform: state
      ? 'scaleY(1) translateY(0px)  '
      : 'scaleY(0.9) translateY(-20px) ',

    config: { mass: 1, tension: 500, friction: 30, clamp: false },
    delay: 150
  })

  const ftp = useSpring({
    opacity: !state ? 1 : 0,
    // transform: state
    //   ? "scale(1) translateY(0px) "
    //   : "scale(1) translateY(-10px) ",

    transformOrigin: 'top',
    transform: !state
      ? 'scaleY(1) translateX(0px)  '
      : 'scaleY(1) translateX(10px) ',

    config: { mass: 1, tension: 500, friction: 30 }
  })

  const { dispatch } = useContext(MyTodosContext)

  const handleDeleteTodo = (e, id) => {
    e.preventDefault()
    // console.log("done")

    dispatch({
      type: 'DELETED',
      id: id
    })
  }

  const handleProjectTab = (e, id) => {
    e.preventDefault()
    const pt = document.getElementsByClassName('')
    e.currentTarget.classList.toggle('active')
    const n = e.currentTarget.getAttribute('name')
    setTab(p => ({ ...p, name: n }))
    // console.log(p => (p = n))
    console.log(typeof n)
  }

  const handlePriorityTab = (e, id) => {
    e.preventDefault()
    const n = e.currentTarget.getAttribute('name')
    setTab(p => ({ ...p, name: n }))
    // console.log(n)
    // console.log(tab.name)
  }

  const handleDatePickerTab = (e, id) => {
    e.preventDefault()
    const n = e.currentTarget.getAttribute('name')
    setTab(p => ({ ...p, name: n }))
    // console.log(n)
    // console.log(tab.name)
  }

  return (
    <>
      <AddTaskButton onClick={() => toggle(!state)}>
        <AddTaskCard>
          <Dot />
          <Icon onClick={e => handleAddTask(e)}>
            <HexBorderSvg>
              <animated.g
                // width="30"
                // height="30"
                // viewBox="0 0 30 30"
                // fill="none"
                // transform={`translate(${15}, ${15})`}

                style={p}
              >
                <AddTaskSvg />
              </animated.g>
            </HexBorderSvg>
          </Icon>
          {!state && (
            <animated.div style={ftp}>
              <AddText onClick={e => handleAddTask(e)}>
                <p> Add Task</p>
              </AddText>
            </animated.div>
          )}
        </AddTaskCard>
      </AddTaskButton>
      {state && (
        <animated.div
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        // style={{ transform: props.xys.interpolate(trans) }}
        // style={fp}
        >
          <Form onSubmit={e => handleSubmit(e)}>
            <animated.div style={fip}>
              <InputWrapper>
                <Input
                  autoFocus
                  ref={inputRef}
                  placeholder='Enter your task here...'
                />
                <Icon onClick={e => handleDeleteTodo(e)}>
                  <DeleteTaskSvg />
                </Icon>
              </InputWrapper>
            </animated.div>
            <animated.div style={fbp}>
              <Card>
                <div className='FormContent'>
                  <FormTabContent tab={tab} />
                </div>
                <div>
                  <hr />
                </div>

                <FormBtns>
                  <Icon name='projectTab' onClick={e => handleProjectTab(e)}>
                    <ProjectSvg />
                  </Icon>
                  <Icon name='priorityTab' onClick={e => handlePriorityTab(e)}>
                    <PrioritySvg />
                  </Icon>
                  <Icon
                    name='datePickerTab'
                    onClick={e => handleDatePickerTab(e)}
                  >
                    <DatePickerSvg />
                  </Icon>
                  <Icon className='big-svg' onClick={e => handleSubmit(e)}>
                    <SubmitSvg />
                  </Icon>
                </FormBtns>
                {/* <Button onClick={e => handleAddTask(e)}>Cancel</Button> */}
              </Card>
            </animated.div>
          </Form>
        </animated.div>
      )}
    </>
  )
}

export default AddTask
