import React, {useRef} from "react"
import './Form.css'
import {Input} from './../Input/Input'
import {Button} from './../Button/Button'

export const Form = () => {
    const refTitle = useRef()
    const refText = useRef()

    const handleChange1 = () => {
        console.log('ref1: ' + refTitle.current.value)
    }

    const handleChange2 = () => {
        console.log('ref2: ' + refText.current.value)
    }

    const addItem = () => {
        console.log('work')
    }

    return <form>
        <Input
            place="Title"
            ref={refTitle}
            handleChange={handleChange1}
        />
        
        <Input 
            place="Text"
            ref={refText}
            handleChange={handleChange2}
        />

        <Button 
            place="Add Item"
            addItem={addItem}
        />
    </form>
}