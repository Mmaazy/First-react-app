import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    
    const items = props.news.map((items) =>{
        return (
            <div className="newsli" key={items.id}>
                <h3>{items.title}</h3>
                <div>
                    {items.feed}
                </div>
            </div>
        )
    })




    return (
        <div>
            {items}
        </div>
    )

}

export default NewsList;