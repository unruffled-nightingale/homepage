import styled from 'styled-components'



export const Spinner = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-100%); 
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  border-radius: 50%;
  border-top-color: #fff;
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`