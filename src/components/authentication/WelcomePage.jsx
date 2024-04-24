import Buttons from "../layout/Buttons"

function WelcomePage() {

    const styleWelcomeBtn = {
        backgroundColor: '#FDC55E',
        border: 'none'
    }
    const welcomeBtnStyle = {
        border: '1px solid #FDC55E',
        color: 'black'
    }
  return (
    <>
        <div id='welcomePage'>
            
            <div className='welcome-page'>
                <div className='welcomebtns'>
                    <div className='welcomeheader'>
                        <h1><span>Welcome To<br/></span><span> Local Dish Corner! <br/></span></h1>
                        <h5>Get start with us as a </h5>
                    </div>
                    <Buttons type="submit" size='lg' style={styleWelcomeBtn}>Vendor <img src="/images/arrow-right.svg" alt="" /></Buttons>
                    <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}>Customer <img src="/images/arrow-right.svg" alt="" /></Buttons>
                    <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}>Guest <img src="/images/arrow-right.svg" alt="" /></Buttons>
                </div>
                <img src="\images\Frame 1618868298.png" alt="" />
            </div>
            {/* <span>Welcome To<br/></span><span> Local Dish Corner! <br/></span>
            <div className='welcomebtns'>
                <Buttons type="submit" size='lg' style={styleWelcomeBtn}>Vendor</Buttons>
                <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}>Customer</Buttons>
                <Buttons type="submit" size='lg' variant="outline-primary" style={welcomeBtnStyle}>Guest</Buttons>
            </div>
            <img src="\images\Frame 1618868298.png" alt="" /> */}
        </div>
        {/* <img src="\images\Frame 1618868298.png" alt="" /> */}
    </>
  )
}

export default WelcomePage