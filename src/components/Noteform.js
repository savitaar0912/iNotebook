import React, { useState } from 'react'
import { addNote } from '../store/Notes/noteslice';
import { useDispatch } from 'react-redux';

export default function Noteform() {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch the addNote action with the form data
        dispatch(addNote(formData));

        // Clear the form after submission
        setFormData({
            title: '',
            description: '',
            tag: '',
        });
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
