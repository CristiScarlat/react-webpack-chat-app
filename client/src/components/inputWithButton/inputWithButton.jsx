import React from 'react'
import './inputWithButton.css'


const InputWithButton = () => {
    return (
        <>
            <form className="chat-input">
                <input type="text" autoComplete="on" placeholder="Type a message" />
                <button>
                    send
                </button>
            </form>
        </>
    )
}

export default InputWithButton