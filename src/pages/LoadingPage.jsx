// import {SpinnerInfinity} from 'spinners-react';
import Spinner from 'react-bootstrap/Spinner';

function LoadingPage() {
  return (
    <>
        {/* <div id='loadingSpinner'>
            <SpinnerInfinity size={150} />
        </div> */}
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </>
  )
}

export default LoadingPage