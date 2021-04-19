import React, {useState} from 'react'
import './inputWithButton.css'


const InputWithButton = ({handleSendMessage, buttonLabel="send"}) => {

    const [inputStr, setInputStr] = useState()

    const handleOnChange = (e) => {
        setInputStr(e.target.value)
    }

    return (
        <>
            <div className="chat-input">
                <input type="text" autoComplete="on" placeholder="Type a message" onChange={handleOnChange}/>
                <button onClick={() => handleSendMessage(inputStr)}>
                    {buttonLabel}
                </button>
            </div>
        </>
    )
}

export default InputWithButton