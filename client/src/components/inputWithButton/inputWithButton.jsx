import React, {useState} from 'react'
import './inputWithButton.css'


const InputWithButton = ({handleButtonOnCLick, buttonLabel="send"}) => {

    const [inputStr, setInputStr] = useState()

    const handleOnChange = (e) => {
        setInputStr(e.target.value)
    }

    const handleOnCLick = () => {
        setInputStr("")
        handleButtonOnCLick(inputStr)
    }

    return (
        <>
            <div className="chat-input">
                <input type="text" autoComplete="on" placeholder="Type a message" onChange={handleOnChange} value={inputStr || ""}/>
                <button onClick={handleOnCLick}>
                    {buttonLabel}
                </button>
            </div>
        </>
    )
}

export default InputWithButton