import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './Course Images/disaster.png'

function Courses() {
  return (
    <div>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Disaster Management</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View Course</Button>
      </Card.Body>
    </Card>
</div>
  );
}

export default Courses;