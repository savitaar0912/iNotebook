import React from 'react'
import '../CSS/Noteitem.css'

export default function Noteitem({ note }) {

    return (
        <>
            <div className="col-md-3">
                <div className="card my-2">
                    <img src="images/post-it-notes-1284667_640.jpg" className="card-img-top" alt="not found" />
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
