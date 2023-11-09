import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {normalizeName} from '../utils/characterUtils'

function CharacterListItem({gender,birth_year,id,name,hair_color,eye_color}) {
  return (
    <Card style={{ width: '20rem' }}>
    
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <ul>
                <li>hairColor: { hair_color}</li>
                <li>eyeColor: { eye_color}</li> 
                <li>birthYear: { birth_year}</li> 
                <li>gender: { gender }</li>
                </ul>
       
        </Card.Text>
        <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterListItem;