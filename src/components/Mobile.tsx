import styled from "styled-components"

const MobileContainer = styled.div`
  height: 100%;
  width: 100%;
`

const MobileText = styled.p`
    position: fixed;
    top: 30%;
    margin: auto;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 2px;
    line-height: 2;
`

export const Mobile = () => {
    return <MobileContainer>
        <MobileText>This application can only be viewed on desktop</MobileText>
    </MobileContainer>
}
