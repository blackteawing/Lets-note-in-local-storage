import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
/* import '../css/Note.css' */
import { v4 as uuid } from 'uuid'
import Grid from '@mui/material/Grid';


export default function Notes() {

    const [notes, setNotes] = React.useState([])
    const [inputText, setInputText] = React.useState([])

    const textHandler = (e) => {
        setInputText(e.target.value)
    }

    const saveHandler = () => {
        setNotes((notes) => [
            ...notes,
            { id: uuid(), text: inputText }
        ])
        setInputText('')
    }


    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'))
        console.log('data', data);
        if (data.length > 0) {
            setNotes(data)
        }
    }, [])

    React.useEffect(() => {
        console.log(notes)
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id)
        setNotes(filteredNotes)
    }

    return (
        <div className='notes'>
            <Grid container spacing={2}>
                {notes.map((note) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Note key={note.id}
                            text={note.text}
                            deletNote={deleteNote}
                            id={note.id}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CreateNote
                        textHandler={textHandler}
                        inputText={inputText}
                        saveHandler={saveHandler}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
