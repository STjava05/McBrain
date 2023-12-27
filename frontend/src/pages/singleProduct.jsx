import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/product/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Card style={{ width: '18rem' }} className='product'>
                        <Card.Img variant='top' src={product.url} alt='' style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='desc'>{product.description}</Card.Text>
                            <Card.Text>Price: {product.price}€</Card.Text>
                            <Card.Text className='cat'>Category: {product.category}</Card.Text>
                            <Card.Text className='quantity'>Quantity: {product.quantity}</Card.Text>
                            <Button variant='outline-warning'>Buy</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleProduct;
