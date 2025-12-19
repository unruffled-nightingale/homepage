import styled from "styled-components";

const BallContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex: 0 0 50%;
  margin-bottom: 30px;
`;

const DetailsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

const NavContainer = styled.div`
  flex: 0 0 30%;
  min-width: 0;
`;

const DetailsContainer = styled.div`
  flex: 0 0 70%;
  min-width: 0;
  box-sizing: border-box;
`;

const ControlsText = styled.p`
  margin: 0px;
  letter-spacing: 0.3em;
  font-size: 0.7em;
`;

export const BallPanel = () => {
  return (
    <BallContainer>
      <Spacer />
      <DetailsRow>
        <NavContainer>
          <ControlsText>
            Use <b>W A S D</b> to move
          </ControlsText>
        </NavContainer>
        <DetailsContainer />
      </DetailsRow>
    </BallContainer>
  );
};
