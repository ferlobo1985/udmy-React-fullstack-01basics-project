import React from 'react';
import NewsItem from './news_list_item';

const newsList = (props) => {

    const news = props.news.map((item)=>(
        <NewsItem item={item} key={item.id} name="s" age="ss"/>
    ))

    return(
        <>
            { news }
        </>
    )
}

export default newsList;