import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    styleText: {
        marginBottom: '1rem',
        color: 'white',
        marginTop: '1rem',
        marginRight: '1rem',
    },
    styleButton: {
        background: 'green',
        color: 'white',
        height: '30px',
        lineHeight:'2px',
        minWidth: '50px',
        marginRight: '1rem',
    }
}))
const Verbos = () => {
    const classes = useStyle()
    const prueba = (e) => {
        // console.log(e)
        document.getElementById(e).style.display = 'block'
        // return a
    }
    var verbos = [
        { name: 'Jugar', id: 'Play' },
        { name: 'Decir', id: 'say' },
        { name: 'Todavia', id: 'still' },
        { name: 'Pensar', id: 'think' },
        { name: 'venir, llegar', id: 'come' },
        { name: 'Mirar, Buscar', id: 'look' },
        { name: 'Ver', id: 'see' },
        { name: 'Saber, Conocer', id: 'know' },
        { name: 'Gustar', id: 'like' },
        { name: 'Poder', id: 'can' },
        { name: 'Hacer', id: 'make' },
        { name: 'Ir', id: 'go' },
        { name: 'Obtener', id: 'get' },
        { name: 'Tener', id: 'have' },
        { name: 'Tomar', id: 'take' },
        { name: 'swin', id: 'nadar' },
        { name: 'traer', id: 'bring' },
        { name: 'quere', id: 'want' },
        { name: 'pedir', id: 'ask' },
        { name: 'volar', id: 'fly' },
        { name: '', id: '' },
        { name: '', id: '' },
    ]
    var palabras = [
        { name: 'Juntos', id: 'together' },
        { name: 'Fútbol', id: 'soccer' },
        { name: 'Aeropuerto', id: 'airport' },
        { name: 'Parque', id: 'park' },
        { name: 'Ordenado/a', id: 'neat' },
        { name: 'Té', id: 'tea' },
        { name: 'Café', id: 'coffee' },

    ]
    var data3 = [
        { name: 'estado anímico', id: 'mood' },
        { name: 'Fútbol', id: 'soccer' },
    ]
    return (
        <Container>
            <Typography style={{ paddingTop: '5rem', color: 'white' }} align='center' variant='h4'>Verbos en Ingles</Typography>
            <Grid container spacing={3} style={{ marginTop: '2rem' }} >
                {verbos.map((d, index) => (
                    <Grid key={index} container item xs={12} sm={6} justify='space-evenly' alignItems='center'>
                        <Grid item xs={3}>
                            <Typography className={classes.styleText}>{d.name}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className={classes.styleButton} onClick={() => prueba(d.id)} >=</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography id={d.id} className={classes.styleText} style={{ display: 'none' }}>{d.id}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Verbos
