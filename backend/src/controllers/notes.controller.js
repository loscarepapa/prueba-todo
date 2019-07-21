const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}; 

notesCtrl.createNotes = async  (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save()
    res.json({ message: "Note saved" })
};


notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
};

notesCtrl.updateNote = async(req, res) => {
    const { title, content, author } = req.body
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author
    })
    res.json({ message: "Note upload" })
};

notesCtrl.deleteNote = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    res.json(note)
};

module.exports = notesCtrl;