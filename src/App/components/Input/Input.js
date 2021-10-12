import './input.css'
import { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => {    
    return (
        <input type="text" ref={ref} placeholder={props.place} onChange={props.handleChange} />
    )
})