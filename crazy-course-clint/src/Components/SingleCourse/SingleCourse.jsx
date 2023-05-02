import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCourse = ({data}) => {
const {name,logo,id}=data;
console.log(data);
    return (
        <Col lg={4} md={6} sm={12} className='p-0'>
        <Card style={{ width: "18rem",margin:'20px' }} className='shadow-lg'>
      <Card.Img variant="top" style={{height: "300px"}} src={logo} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>
          
        </Card.Text>

        
          <Link to={`/practice/${id}`}>
          <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            About This Course
          </Button>
          </div>
          </Link>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default SingleCourse;