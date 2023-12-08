const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Note = require('../models/Note')
const fetchuser = require('../middleware/fetchuser');


const validateNotes = [
    body('title', 'Enter a Title').notEmpty(),
    body('description', 'Enter a Description'),
    body('tag', 'Enter a Tag'),
]

// Route handler for fetching notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const userId = req.userId
    // console.log(userId)
    const note = await Note.find({ user: userId })
    res.json({ "Notes": note })
})

// Route handler for creating notes
router.post('/createnote', fetchuser, validateNotes, async (req, res) => {
    try {
        // Validate Note
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const { title, description, tag } = req.body;

        // Check for duplicate
        const existinngNote = await Note.findOne({ title })
        if (existinngNote) {
            console.log("Sending response: Note already exists");
            return res.status(404).send("Note already exists");
        }

        // creating a new note
        const newNote = await Note.create({
            title, description, tag, user: req.userId
        })

        const savedNote = newNote.save()
        return res.status(200).json({ savedNote })
    }
    catch (error) {
        console.error('Error 45:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Route to update existing note
router.put('/updatenote/:id', fetchuser , async (req,res)=>{
    const {title,description,tag} = req.body

    // adding in new note 1 by 1
    const newNote = {}
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}else{newNote.tag = Note.schema.paths.tag.defaultValue }

    let note = await Note.findOne({_id: req.params.id})
    // console.log(note)
    if(!note){
        return res.status(404).send("Note not found")
    }
    if(note.user.toString() != req.userId){
        return res.status(401).send("Not authorized!")
    }

    note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote}, {new: true})
    return res.status(200).send(note)
})

// Route to delete existing note
router.delete('/deletenote/:id', fetchuser , async (req,res)=>{
   
    let note = await Note.findOne({_id: req.params.id})
    // console.log(note)
    if(!note){
        return res.status(404).send("Note not found")
    }
    if(note.user.toString() != req.userId){
        return res.status(401).send("Not authorized!")
    }

    note = await Note.findByIdAndDelete(req.params.id)

    return res.status(200).send("Note Deleted")
})


module.exports = router