import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Note({ text, deletNote, id }) {
    return (
        <div className='note'>
            <Card sx={{ marginTop: 5 }}>
                <CardMedia
                    sx={{ height: 260 }}
                    image="note.jpg"
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeleteForeverIcon onClick={() => deletNote(id)}></DeleteForeverIcon>
                </CardActions>
            </Card>


        </div>
    )
}
