import { Container, Typography, makeStyles, Paper, Box, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    textStyle: {
        color: 'white',
        marginBottom: '1rem',
        textAlign: 'justify'
    },
    subtitle1: {
        fontSize: '15pt',
        color: 'white',
        fontWeight: 'bold',
        marginBottom:'1rem'
    },
    textBody: {
        color: 'white',
        marginBottom: '1rem',
        fontSize: '12pt',
        textAlign: 'justify'
    },
}))
const Deportes = () => {
    const classes = useStyles()

    var data = [
        { id: 'Football', name: 'balompie (fútbol)' },
        { id: 'Basketball', name: 'baloncesto' },
        { id: 'Handball', name: 'balonmano (handbol)' },
        { id: 'Baseball', name: 'beisbol' },
        { id: 'Volleyball', name: 'voleibol' },
        { id: 'Racquetball', name: 'racquetball' },
    ]
    var data2=[
        {id:'Golf', name:'golf'},
        {id:'Tennis', name:'tenis'},
        {id:'Paddle', name:'pádel'},
        {id:'Ping pong', name:'ping pong'},
        {id:'Rugby', name:'rugby'},
        {id:'Waterpolo', name:'waterpolo'},
        {id:'Cricket', name:'cricket'},
        {id:'Bowling', name:'bolos'},
        {id:'Badminton', name:'badminton'},
        {id:'Hockey', name:'hockey'},
    ]
    var data3=[
        {id:'She runs every week', name:'Ella corre cada semana'},
        {id:'They swim every day', name:'Ellos nadan cada dia'}
    ]
    var data4=[
        {id:'My friend like to swim',name:'A mis amigos les gusta nadar'},
        {id:'I want to swim',name:'Quiero nadar'},
    ]
    var data5=[
        {id:'Alexander is running right now',name:'Alexander está corriendo ahora mismo'},
        {id:"My siblings are swimming in the neighbour's pool",name:'Mis hermandos estan nadando en la picina del vecino'},
    ]
    var data6=[
        {id:'I like swimming',name:'Me gusta nadar'},
        {id:"I think she doesn´t like running",name:'Creo que a ella no le gusta correr'},
        {id:'I go swimming on Saturdays',name:'Voy a nada los sábados'},
    ]
    var data7=[
        {id:'Boxing',name:'boxeo'},
        {id:'Hiking',name:'senderismo'},
        {id:'Skiing',name:'esquiar'},
        {id:'Skating',name:'patinar'},
        {id:'Joggin',name:'correr'},
        {id:'Snowboarding',name:'snowboard o snow'},
        {id:'Cycling',name:'ciclismo'},
        {id:'Kitesurfing',name:'kitesurf'},
        {id:'Surfing',name:'surfear'},
        {id:'Fencing',name:'esgrima'},
    ]
    return (
        <Container maxWidth='md'>
            <Typography align='center' variant='h5' style={{ paddingTop: '5rem', color: 'white' }}>SPORTS VOCABULARY</Typography>
            <Typography variant='h6' className={classes.textStyle}>Los deportes en ingles:<span style={{ fontSize: '12pt' }}> vocabulario y uso</span></Typography>
            <Typography variant='subtitle1' className={classes.textStyle}>Para hablar de un deporte en una frase en inglés,<strong>se usa el verbo play.</strong>  En algunas ocasiones, se puede usar <strong>do</strong>  y <strong>go.</strong></Typography>
            <ul>
                <li><Typography className={classes.textStyle}>Play: se usa cuando queremos explicar que jugamos a algún deporte. Por ejemplo, jugar al fútbol sería: play football. Generalmente hacen referencia a juegos competitivos, ya que juegas para ganar.</Typography></li>
                <li><Typography className={classes.textStyle}>Go: se usa más en deportes individuales y se acompaña de la terminación –ing. Por ejemplo: go running (ir a correr).</Typography></li>
                <li><Typography className={classes.textStyle}>Do: se usa en deportes individuales y en grupo, pero mayoritariamente en deportes que no se usan como verbos, es decir, que llevan la terminación –ing. No es que sea incorrecto usarlo con estos deportes que son verbos, pero es muy poco frecuente. Ejemplo: I do athleticism; es un término correcto pero que prácticamente no se usa.</Typography></li>
            </ul>
            <Typography className={classes.subtitle1}>Traducciones y semejanzas</Typography>
            <Typography className={classes.textBody}>Algunos deportes se traducen igual al castellano mientras que otros se parecen. La mayoría son deportes de pelota, como el voleibol o el baloncesto.</Typography>
            <Typography className={classes.subtitle1}>Ball sports</Typography>
            <Typography className={classes.textBody}>Los ball sports, son nombres de deportes a los que se juego con una pelota. Su nombre es una palabra compuesta acabada en -ball (pelota). Tanto en español como en inglés, contienen el nombre de la parte del cuerpo con la que se juega o el material que se usa. Algunos ejemplos son:</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth: '500px', marginBottom:'1rem' }}>
                    {data.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}} >
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>

                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Otros deportes que no incorporan la palabra ball, pero también se juegan con pelota son:</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth: '500px', marginBottom:'1rem' }}>
                    {data2.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>

                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Como puedes observar, algunos deportes no tienen traducción directa al castellano. Esto se debe a que estos deportes son más populares y se practican más en lugares en los que predomina el inglés, como Estados Unidos, Canadá, Inglaterra o Australia. En algunos casos se han hecho adaptaciones, como es el caso del top one de nuestra lista: el fútbol.</Typography>
            <Typography className={classes.subtitle1}>Ing Sports</Typography>
            <Typography className={classes.textBody}>Algunos deportes en inglés son denominados por su verbo, aunque tengan una forma nominal asociada. Este es el caso de running. El nombre es run, pero se usa el verbo, running para referirse al deporte en si. En otros casos, el deporte es, directamente, un verbo.</Typography>
            <Typography className={classes.textBody}>Veamos a continuación las diferencias entre deportes en cuya denominación se usa un verbo o un nombre.</Typography>
            <Typography className={classes.textBody}>Los deportes como running y swimming, tienen una forma nominal: run y swim. Esta forma nominal se usa, en <strong>present simple</strong>, para indicar una práctica habitual, pero no en este momento. Recuerda que si se usa con she/he/it, se le añade -s al final.</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth: '500px', marginBottom:'1rem' }}>
                    {data3.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>
                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Si se usa con to delante, se puede emplear en diferentes contextos:</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth: '500px', marginBottom:'1rem' }}>
                    {data4.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>
                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Las formas verbales de estos deportes (running, swimming) se usan en el <strong>present continuous</strong>, para indicar la práctica del deporte en este momento, en este mismo instante.</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{  marginBottom:'1rem' }}>
                    {data5.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>
                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>También puedes usar la forma verbal para expresar tus gustos. En este caso también puedes añadir go delante:</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth:'550px', marginBottom:'1rem' }}>
                    {data6.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>
                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Algunos deportes con terminación –ing son:</Typography>
            <div align='center'>
                <Paper component={Box} p={2} style={{ maxWidth:'500px', marginBottom:'1rem' }}>
                    {data7.map((d, index) => (
                        <Grid key={index} container justify='space-evenly' style={{marginBottom:'0.5rem'}}>
                            <Grid item xs={5} ><Typography align='center' >{d.id}</Typography></Grid>
                            <Grid item xs={1} ><Typography align='center'> - </Typography></Grid>
                            <Grid item xs={6} ><Typography align='center' >{d.name}</Typography></Grid>
                        </Grid>
                    ))}
                </Paper>
            </div>
            <Typography className={classes.textBody}>Estos son algunos de los términos más habituales de <strong>vocabulario de deportes en inglés</strong> que puedes encontrar en distintos países. En este artículo te hemos comentado los más destacados, si no has encontrado el tuyo te animamos a seguir con la búsqueda, ¡hasta encontrar tu deporte favorito!</Typography>
            </Container>
    )
}

export default Deportes
