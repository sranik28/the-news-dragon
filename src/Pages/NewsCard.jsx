import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineEye, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    console.log(news)
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "50px" }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                </div>
                <div>
                    <FiBookmark />
                    <BiShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....<Link to={`/News/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating?.number || 0)}
                        readOnly />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <AiOutlineEye />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;