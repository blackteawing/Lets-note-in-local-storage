import React, { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box, TextField, Button, Card, CardActions, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';


export default function CreateNote({ inputText, textHandler, saveHandler }) {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    const [buttonStatus, setButtonStatus] = useState(true);

    useEffect(() => {
        inputText.length > 1 ? setButtonStatus(false) : setButtonStatus(true)
    }, [inputText.length])

    return (
        <div className='note'>

            <Card >
                <CardMedia
                    sx={{ height: 260 }}
                    image="newnote.jpg"
                    title=""
                />
                <CardContent>
                    <TextField
                        variant="outlined"
                        size='small'
                        cols="10"
                        rows="5"
                        label="Type Something Here..."
                        maxLength='100'
                        value={inputText}
                        onChange={textHandler}
                        backgroundColor='white'
                        autoFocus={false}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                saveHandler()
                            }
                        }}
                    ></TextField>
                    <Typography variant="body2" color="text.secondary">
                        <br />
                        {charLeft} words left
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='note__save'
                        onClick={saveHandler}
                        variant="contained"
                        disabled={buttonStatus}

                    >Save</Button>
                </CardActions>
                <LinearProgress className='char__progress' value={charLeft} variant='determinate' color="warning" />
            </Card>

        </div >
    )
}
