import {SpinnerInfinity} from 'spinners-react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingPage() {
  return (
    <>
        <div id='loadingSpinner'>
            <SpinnerInfinity size={150} />
        </div>
    </>
  )
}

export default LoadingPage