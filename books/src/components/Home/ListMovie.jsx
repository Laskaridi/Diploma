import React from 'react';
import { Offcanvas, ListGroup } from 'react-bootstrap';
import './home.css';

function ListMovie({ show, onClose, onCategorySelect }) {

    const categories = ['Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance'];
    
    return (
        <div>  
           
            <Offcanvas show={show} onHide={onClose} placement="start">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Categories</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ListGroup variant="flush">
          {categories.map((category) => (
            <ListGroup.Item
              key={category}
              onClick={() => {
                onCategorySelect(category);
                onClose();
              }}
              style={{ 
                cursor: 'pointer',
                padding: '20px 10px'
               }}
            >
              {category.replace('_', ' ').toUpperCase()}
            </ListGroup.Item>
          ))}
        </ListGroup>
            </Offcanvas.Body>
            </Offcanvas> 
           
        </div>
    );
}

export default ListMovie;