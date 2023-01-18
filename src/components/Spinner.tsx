import styled from 'styled-components'


type SpinnerProps = {
  left: string
}

export const Spinner = styled.div<SpinnerProps>`
  z-index: -1;
  position: absolute;
  left: ${props => props.left};
  top: 10%;
  transform: translateX(-100%); 
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid grey;
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`