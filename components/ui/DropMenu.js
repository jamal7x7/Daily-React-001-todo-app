import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  
  

  .options-content {
    /* display: none; */
   
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bgl};
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
`
const DropMenu = ({ children, showMenu }) => {
  return (
    <Styles>
      <div className='options-content'>
        <div> {children} </div>
      </div>
    </Styles>
  )
}

export default DropMenu
