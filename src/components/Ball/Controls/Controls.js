import MobileControls from './MobileControls.js';
import DesktopControls from './DesktopControls.js';
import { isMobile } from 'react-device-detect';


const Controls = ({ setMovement }) => {

  return (
    <>
      {
        isMobile ?
          <MobileControls setMovement={setMovement} /> :
          <DesktopControls setMovement={setMovement} />
      }
    </>
  );
}

export default Controls;
