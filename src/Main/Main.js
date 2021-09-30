import './Main.css'
import articles from '../data/articles.json'
console.log(articles)

function Main() {
    return(
        <div className="main">
            {articles.map(item => <h2>{item.title}</h2>)}
        </div>
    )
}

export default Main;