import React from 'react'
import './listContainer.css'

const List = ({ itemsList = ['cris', 'oana', 'ion'] }) => {
    return (
        <div className="list-container">
            <ul>
                {itemsList.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List