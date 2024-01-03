import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateNote } from '../store/Notes/noteslice';

export default function EditNote({ showBtn, setshowBtn, note }) {

    const hostName = "http://localhost:5000"

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: note.title,
        description: note.description,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log('formData')
    };

    // const launchModalButtonRef = useRef(null)

    // useEffect(() => {
    //     // Trigger click on the modal launch button when showBtn becomes true
    //     if (showBtn) {
    //       launchModalButtonRef.current.click();
    //       setshowBtn(false); // Reset showBtn to false after triggering the click
    //       console.log('showBtn', showBtn)
    //     }
    //   }, [showBtn]);

    const inputRef = useRef(null)

    const updateChange = async (e) => {

        e.preventDefault(); // Prevents the default form submission behavior
        console.log("Updated", { _id: note._id, formData});

        inputRef.current.click()

        // const { title, description } = { ...formData }

        // API CALL 
        const response = await fetch(`${hostName}/api/notes/updatenote/${note._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTFkYzc3Yzk4OGUzNDg5ZDA1ZDI5MzUiLCJpYXQiOjE2OTY2NzU1NDN9.tR9jWT5KwAPsQNhRKtQhJvV6iAi2iFDCelJ7z45VhC0"
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log("Update successful")
            // Update Redux store with the new data
            dispatch(updateNote({ _id: note._id, formData}));
        } else {
            console.error("Failed to update note");
        }

        // Clear the form after submission
        setFormData({
            title: '',
            description: '',
        });
    }

    return (
        <>
            <i className="fa fa-pen mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edit Note
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={inputRef} ></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group my-3">
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
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button onClick={updateChange} type="button" className="btn btn-primary">
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
