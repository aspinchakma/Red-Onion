import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Food.css'

const Food = ({ food }) => {
    const history = useHistory();
    const getFoodId = (id) => {
        console.log(id)
        history.push(`/food/${id}`)

    }
    const { img, name, description, price, id } = food;
    return (
        <div>
            <Col>
                <Card className="food_container py-3" onClick={() => getFoodId(id)}>
                    <Card.Img className="card-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>
                        <Card.Text className="text-center">
                            {description}
                        </Card.Text>
                        <h3 className="text-center">${price}</h3>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Food;