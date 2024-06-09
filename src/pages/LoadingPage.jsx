import {SpinnerInfinity} from 'spinners-react';


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