import { useState } from 'react';
import { Article } from "../Article/Article"

export const Articles = () => {
    // const data = fetch('https://wiki8897.herokuapp.com/articles').then(resp => resp.json().then(resp => resp));
    /*const data = [
        {title: 'article1', text: 'lorem ipsim sdfsdfsdfsdfsdf'},
        {title: 'article2', text: 'lorem ipsim sdfsdfsdfsdfsdf'},
    ]
    console.log(data);*/

    const [data, setData] = useState([
        {title: 'article1', text: 'lorem ipsim sdfsdfsdfsdfsdf'},
        {title: 'article2', text: 'lorem ipsim sdfsdfsdfsdfsdf'}
    ])

    const articles = data.map((article, index) => {
        return (
            <Article title={article.title} text={article.text} index={index} />
        )
    })

    return (
        <div>
            <h2>Articles</h2>
            {articles}
        </div>
    );
}