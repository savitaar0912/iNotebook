const mongoose = require('mongoose')
const {Schema} = mongoose

const NoteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required : true,
        unique: true
    },
    description:{
        type: String
    },
    tag:{
        type: String,
        default: "General"
    }
})
Note = mongoose.model('Notes' , NoteSchema)
Note.createIndexes()
module.exports = Note