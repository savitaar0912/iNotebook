import React, { useState } from 'react'
import { addNote } from '../store/Notes/noteslice';
import { useDispatch } from 'react-redux';

export default function Noteform({ setReload }) {

    const hostName = "http://localhost:5000"

    const dispatch = useDispatch();

    // State to store form values
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag: '',
    });

    // Update form values on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, description, tag } = { ...formData }

        // API CALL
        const response = await fetch(`${hostName}/api/notes/createnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkYzc3Yzk4OGUzNDg5ZDA1ZDI5MzUiLCJpYXQiOjE2OTY2NzU1NDN9.tR9jWT5KwAPsQNhRKtQhJvV6iAi2iFDCelJ7z45VhC0"
            },
            body: JSON.stringify({ title, description, tag }),
        })

        if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        } else {
            console.log("Success")
        }
        // Dispatch the addNote action with the form data
        dispatch(addNote(formData));

        // Clear the form after submission
        setFormData({
            title: '',
            description: '',
            tag: '',
        });

        setReload(true)
    };

    return (
        <>
            <div className='container bg-primary-subtle'>
                <form method='post' onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                        <h1 style={{ textAlign: "center" }}>NotesForm</h1>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="tag">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            placeholder="Tag"
                            value={formData.tag}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </form>
                <br />
            </div>
        </>
    )
}
