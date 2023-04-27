import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import EditorsInsights from './EditorsInsights';

const NewsPages = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><span><AiOutlineArrowLeft /></span>  All news in this category </Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights />
        </div>
    );
};

export default NewsPages;