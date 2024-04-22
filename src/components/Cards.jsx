import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <>
      {/* <div className="vendors-title" ><span>Today </span><span >Top Local</span><span>Dish </span><span>Vendors</span></div> */}
      <CardGroup id="vendorsCards">
        <Card>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" />
          <Card.Body>
          <Card.Title>Calabar kitchen</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" />
          <Card.Body>
            <Card.Title>Yoruba kitchen</Card.Title>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="\images\Calabar kitchen.jpg" />
          <Card.Body>
            <Card.Title>Igbo kitchen</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">(10 Reviews)</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default Cards;