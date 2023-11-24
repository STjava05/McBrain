

import React, { useState, useEffect } from 'react';
import './shop.css';
import Lottie from 'lottie-react';
import animation from '../aminations/animation_ln96khv0.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/product');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts();
    }, []);

    return (
        <Container className='home'>
            <div className='header' style={{ width: '200px' }}>
                <Lottie animationData={animation} />
            </div>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                {products.map(product => (
                    <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '18rem' }} className='product'>
                            <Card.Img variant='top' src={product.url} alt=''style={{height:"200px",objectFit:"cover"}} />
                            <Card.Body>
                                <Link to={`/product/${product._id}`} className='link'>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className='desc'>{product.description}</Card.Text>
                                    <Card.Text>Price: {product.price}€ </Card.Text>
                                    <Card.Text className='cat'>Category: {product.category}</Card.Text>
                                    <Card.Text className='quantity'>Quantity: {product.quantity}</Card.Text>
                                    <Button variant='outline-warning'>Buy</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Shop;
