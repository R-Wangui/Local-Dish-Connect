import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaHandHoldingUsd, FaUsers } from 'react-icons/fa'

function RestaurantsNearby() {
  return (
    <>
        <div id='restaurantsNearby'>
            <div>
                <h1><span>Nearby </span><span style={{color: '#FDC55E'}}>Restaurants</span></h1>
                <h4>Savor exquisite meals crafted with care and passion, served in a cozy and inviting atmosphere."</h4>
            </div>
            <img className='rosemary' src="\images\rosemary.svg" alt="" />
            <div className='restaurantCards'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="\images\Restaurant-nearby1.png" />
                    <Card.Body>
                        <Card.Title>Becca Food</Card.Title>
                        <Card.Text>Amala and Ewedu</Card.Text>
                        <p>Ozumba Mbadiwe Ave<span style={{marginLeft:"20px"}}><FaStar /> 4.0</span></p>
                        <p> <span><FaHandHoldingUsd /></span> 25 Min <span style={{marginLeft:"60px"}}><FaUsers /> 200 for two</span></p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  )
}

export default RestaurantsNearby
