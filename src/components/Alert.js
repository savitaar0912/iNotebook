import React from 'react'

export default function Alert(props) {

    let {type, msg} = props

    const upper = (word) => {
        const upp = word.toUpperCase();
        return upp[0] + word.toLowerCase().slice(1)
    }

    return (
        <div style={{ height: '50px' }}>
            <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                <strong>{upper(type)}</strong>: {msg}
            </div>
        </div>
    )
}
