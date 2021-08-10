import React from 'react'

function Button({ children, onClick }) {
    return (
        <div div className="button button--outline button--add" onClick={onClick}>
            {children}
        </div>
    )
}

export default Button
