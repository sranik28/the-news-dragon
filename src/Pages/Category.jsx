import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)   
    return (
        <div>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id} news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;