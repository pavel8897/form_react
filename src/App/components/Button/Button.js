import './Button.css'

export const Button = (props) => {
    return (
        <input className="btn" type="submit"onClick={props.addItem} value={props.place} />
    )
}