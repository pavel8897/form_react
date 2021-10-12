import './Article.css';

export const Article = (props) => {
    return (
        <article key={props.index} className='article'>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    )
}