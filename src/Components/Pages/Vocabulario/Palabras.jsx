import { Button, Container, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
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
        lineHeight: '2px',
        minWidth: '50px',
        marginRight: '1rem',

    },
    root: {
        '& > *': {
          marginTop: theme.spacing(2),
        },
      },
}))
const Palabras = () => {
    const classes = useStyle()
    
    const prueba = (e) => {
        // console.log(e)
        document.getElementById(e).style.display = 'block'
        // return a
    }
    
    var palabras = [
        { id:'the', name:'el/la/los/las'},
        { id:'of', name:'de'},
        { id:'to', name:'a/hacia'},
        { id:'and', name:'y'},
        { id:'a', name:'un/una'},
        { id:'in', name:'en'},
        { id:'is', name:'es'},
        { id:'it', name:'eso'},
        { id:'you', name:'tú/ustedes'},
        { id:'that', name:'ese'},
        { id:'he', name:'él'},
        { id:'was', name:'estaba'},
        { id:'for', name:'para'},
        { id:'on', name:'en/sobre'},
        { id:'are', name:'son/están'},
        { id:'with', name:'con'},
        { id:'as', name:'como'},
        { id:'I', name:'yo'},
        { id:'his', name:'su (de él)'},
        { id:'they', name:'ellos/ellas'},
        { id:'be', name:'ser/estar'},
        { id:'at', name:'a'},
        { id:'one', name:'uno'},
        { id:'have', name:'tener'},
        { id:'this', name:'esta/esto'},
        { id:'from', name:'de'},
        { id:'or', name:'o'},
        { id:'had', name:'tenido'},
        { id:'by', name:'por'},
        { id:'hot', name:'caliente'},
        { id:'word', name:'palabra'},
        { id:'but', name:'pero'},
        { id:'what', name:'qué'},
        { id:'some', name:'algunos'},
        { id:'we', name:'nosotros'},
        { id:'can', name:'poder'},
        { id:'out', name:'fuera'},
        { id:'other', name:'otro'},
        { id:'were', name:'fueron'},
        { id:'all', name:'todas'},
        { id:'there', name:'ahí'},
        { id:'when', name:'cuando'},
        { id:'up', name:'arriba'},
        { id:'use', name:'utilizar'},
        { id:'your', name:'Su/vuestro(s)/vuestras(s)'},
        { id:'how', name:'cómo'},
        { id:'said', name:'dijo'},
        { id:'an', name:'un'},
        { id:'each', name:'cada'},
        { id:'she', name:'ella'},
        { id:'which', name:'cual'},
        { id:'do', name:'hacer'},
        { id:'their', name:'su(de ellos)'},
        { id:'time', name:'hora/tiempo'},
        { id:'if', name:'Si (como condicional)'},
        { id:'will', name:'será'},
        { id:'way', name:'camino'},
        { id:'about', name:'acerca de'},
        { id:'many', name:'muchos'},
        { id:'then', name:'entonces'},
        { id:'them', name:'ellos'},
        { id:'write', name:'escribir'},
        { id:'would', name:'haría'},
        { id:'like', name:'me gusta'},
        { id:'so', name:'asi que'},
        { id:'these', name:'estas'},
        { id:'her', name:'su (de ella)'},
        { id:'long', name:'largo'},
        { id:'make', name:'hacer'},
        { id:'thing', name:'cosa'},
        { id:'see', name:'ver'},
        { id:'him', name:'él'},
        { id:'two', name:'dos'},
        { id:'has', name:'tiene'},
        { id:'look', name:'Mira'},
        { id:'more', name:'Más'},
        { id:'day', name:'día'},
        { id:'could', name:'podría'},
        { id:'go', name:'ir'},
        { id:'come', name:'ven'},
        { id:'did', name:'hizo'},
        { id:'number', name:'número'},
        { id:'sound', name:'sonar'},
        { id:'no', name:'no'},
        { id:'most', name:'más'},
        { id:'people', name:'gente'},
        { id:'my', name:'mi/gente'},
        { id:'over', name:'encima/sobre'},
        { id:'know', name:'saber'},
        { id:'water', name:'agua'},
        { id:'than', name:'que'},
        { id:'call', name:'llamada'},
        { id:'first', name:'primero'},
        { id:'who', name:'quien'},
        { id:'may', name:'mayo'},
        { id:'down', name:'abajo'},
        { id:'side', name:'lado'},
        { id:'been', name:'estado'},
        { id:'now', name:'ahora'},
        { id:'find', name:'encontrar'},
        { id:'any', name:'alguna'},
        { id:'new', name:'nuevo'},
        { id:'work', name:'trabajo'},
        { id:'part', name:'parte'},
        { id:'take', name:'tomar'},
        { id:'get', name:'obtener'},
        { id:'place', name:'lugar'},
        { id:'made', name:'hecho'},
        { id:'live', name:'vivir'},
        { id:'where', name:'dónde'},
        { id:'after', name:'después'},
        { id:'back', name:'atrás/espalda'},
        { id:'little', name:'pequeño'},
        { id:'only', name:'solamente'},
        { id:'round', name:'redondo'},
        { id:'man', name:'hombre'},
        { id:'year', name:'año'},
        { id:'came', name:'vino'},
        { id:'show', name:'espectáculo'},
        { id:'every', name:'cada'},
        { id:'good', name:'bueno'},
        { id:'me', name:'yo'},
        { id:'give', name:'dar'},
        { id:'our', name:'nuestra'},
        { id:'under', name:'debajo'},
        { id:'name', name:'nombre'},
        { id:'very', name:'muy'},
        { id:'through', name:'mediante'},
        { id:'just', name:'sólo'},
        { id:'form', name:'formar'},
        { id:'sentence', name:'frase'},
        { id:'great', name:'estupendo'},
        { id:'think', name:'pensar'},
        { id:'say', name:'decir'},
        { id:'help', name:'ayuda'},
        { id:'low', name:'bajo'},
        { id:'line', name:'línea'},
        { id:'differ', name:'diferir de'},
        { id:'turn', name:'giro'},
        { id:'cause', name:'porque'},
        { id:'much', name:'mucho'},
        { id:'mean', name:'media'},
        { id:'before', name:'antes de'},
        { id:'move', name:'movimiento'},
        { id:'right', name:'derecha'},
        { id:'boy', name:'chico'},
        { id:'old', name:'antiguo'},
        { id:'too', name:'también'},
        { id:'same', name:'mismo'},
        { id:'tell', name:'contar'},
        { id:'does', name:'hace'},
        { id:'set', name:'conjunto/ajustar'},
        { id:'three', name:'Tres'},
        { id:'want', name:'querer'},
        { id:'air', name:'aire'},
        { id:'well', name:'bien'},
        { id:'also', name:'además'},
        { id:'play', name:'jugar'},
        { id:'small', name:'pequeño/a'},
        { id:'end', name:'fin'},
        { id:'put', name:'poner'},
        { id:'home', name:'casa'},
        { id:'read', name:'leer'},
        { id:'hand', name:'mano'},
        { id:'port', name:'Puerto'},
        { id:'large', name:'grande'},
        { id:'spell', name:'deletrear'},
        { id:'add', name:'añadir'},
        { id:'even', name:'incluso'},
        { id:'land', name:'tierra'},
        { id:'here', name:'aqui'},
        { id:'must', name:'debe'},
        { id:'big', name:'grande'},
        { id:'high', name:'alto'},
        { id:'such', name:'tal'},
        { id:'follow', name:'seguir'},
        { id:'act', name:'acto'},
        { id:'why', name:'por qué'},
        { id:'ask', name:'pedir'},
        { id:'men', name:'hombres'},
        { id:'change', name:'cambio'},
        { id:'went', name:'fuimos'},
        { id:'light', name:'ligero'},
        { id:'kind', name:'tipo'},
        { id:'off', name:'apagado'},
        { id:'need', name:'necesitar'},
        { id:'house', name:'casa'},
        { id:'picture', name:'imagen'},
        { id:'try', name:'tratar/intentar'},
        { id:'us', name:'nos'},
        { id:'again', name:'de nuevo/otra vez'},
        { id:'animal', name:'animal'},
        { id:'point', name:'punto'},
        { id:'mother', name:'madre'},
        { id:'world', name:'mundo'},
        { id:'near', name:'cerca'},
        { id:'build', name:'construir'},
        { id:'self', name:'yo mismo'},
        { id:'earth', name:'tierra'},
        { id:'father', name:'padre'},
        { id:'head', name:'cabeza'},
        { id:'stand', name:'estante/posición/estar de pie'},
        { id:'own', name:'propio'},
        { id:'page', name:'página'},
        { id:'should', name:'deberia'},
        { id:'country', name:'país'},
        { id:'found', name:'encontró'},
        { id:'answer', name:'responder'},
        { id:'school', name:'colegio'},
        { id:'grow', name:'crecer'},
        { id:'study', name:'estudiar'},
        { id:'still', name:'silencioso'},
        { id:'learn', name:'aprender'},
        { id:'plant', name:'planta'},
        { id:'cover', name:'cubrir'},
        { id:'food', name:'comida'},
        { id:'sun', name:'sol'},
        { id:'four', name:'cuatro'},
        { id:'between', name:'entre'},
        { id:'state', name:'estado'},
        { id:'keep', name:'guardar/mantener'},
        { id:'eye', name:'ojo'},
        { id:'never', name:'Nunca'},
        { id:'last', name:'último'},
        { id:'let', name:'dejar'},
        { id:'thought', name:'pensamiento'},
        { id:'city', name:'cuidad'},
        { id:'tree', name:'árbol'},
        { id:'corss', name:'cruzar'},
        { id:'farm', name:'granja'},
        { id:'hard', name:'difícil'},
        { id:'start', name:'comienzo'},
        { id:'might', name:'podria'},
        { id:'story', name:'historia'},
        { id:'saw', name:'Sierra'},
        { id:'far', name:'lejos'},
        { id:'sea', name:'mar'},
        { id:'draw', name:'dibujar'},
        { id:'left', name:'izquierda'},
        { id:'late', name:'tarde'},
        { id:'run', name:'correr'},
        { id:"don't", name:'No'},
        { id:'while', name:'mientras'},
        { id:'press', name:'prensa'},
        { id:'close', name:'cerrado'},
        { id:'night', name:'noche'},
        { id:'real', name:'real'},
        { id:'life', name:'vida'},
        { id:'few', name:'pocos'},
        { id:'north', name:'norte'},
        { id:'open', name:'abierto'},
        { id:'seem', name:'parecer'},
        { id:'together', name:'juntos'},
        { id:'next', name:'siguiente'},
        { id:'while', name:'blanco'},
        { id:'children', name:'niños'},
        { id:'begin', name:'empezar'},
        { id:'got', name:'tiene'},
        { id:'walk', name:'caminar'},
        { id:'example', name:'ejemplo'},
        { id:'ease', name:'facilitar'},
        { id:'paper', name:'papel'},
        { id:'group', name:'grupo'},
        { id:'always', name:'siempre'},
        { id:'music', name:'música'},
        { id:'those', name:'aquellos'},
        { id:'both', name:'ambos'},
        { id:'mark', name:'marca'},
        { id:'often', name:'a menudo'},
        { id:'letter', name:'carta'},
        { id:'until', name:'hasta/hasta que'},
        { id:'mile', name:'milla'},
        { id:'river', name:'río'},
        { id:'car', name:'coche'},
        { id:'feet', name:'Pies'},
        { id:'care', name:'cuidado'},
        { id:'second', name:'segundo'},
        { id:'book', name:'libro'},
        { id:'carry', name:'llevar'},
        { id:'took', name:'tomó'},
        { id:'science', name:'ciencia'},
        { id:'eat', name:'comer'},
        { id:'room', name:'habitación'},
        { id:'friend', name:'amigo'},
        { id:'began', name:'empezó'},
        { id:'idea', name:'idea'},
        { id:'fish', name:'pescado'},
        { id:'mountain', name:'montaña'},
        { id:'stop', name:'detener'},
        { id:'once', name:'una vez'},
        { id:'base', name:'base'},
        { id:'hear', name:'oír'},
        { id:'horse', name:'caballo'},
        { id:'cut', name:'cortar'},
        { id:'sure', name:'Por supuesto'},
        { id:'watch', name:'reloj'},
        { id:'color', name:'color'},
        { id:'face', name:'cara'},
        { id:'wood', name:'madera'},
        { id:'main', name:'Principal'},
        { id:'enough', name:'sufuciente'},
        { id:'plain', name:'llanura'},
        { id:'girl', name:'Chica'},
        { id:'usual', name:'usual'},
        { id:'young', name:'joven'},
        { id:'ready', name:'Listo'},
        { id:'above', name:'encima'},
        { id:'ever', name:'alguna vez'},
        { id:'red', name:'rojo'},
        { id:'list', name:'lista'},
        { id:'though', name:'aunque'},
        { id:'feel', name:'sensación'},
        { id:'talk', name:'hablar'},
        { id:'bird', name:'pájaro'},
        { id:'soon', name:'pronto'},
        { id:'body', name:'cuerpo'},
        { id:'dog', name:'perro'},
        { id:'family', name:'familia'},
        { id:'direct', name:'directo'},
        { id:'pose', name:'pose'},
        { id:'leave', name:'salir'},
        { id:'song', name:'canción'},
        { id:'measure', name:'medida'},
        { id:'door', name:'puerta'},
        { id:'product', name:'producto'},
        { id:'black', name:'negro'},
        { id:'short', name:'corto'},
        { id:'numeral', name:'número'},
        { id:'class', name:'clase'},
        { id:'wind', name:'viento'},
        { id:'question', name:'pregunta'},
        { id:'happen', name:'ocurrir'},
        { id:'complete', name:'completar'},
        { id:'ship', name:'envio'},
        { id:'area', name:'zona'},
        { id:'half', name:'mitad'},
        { id:'rock', name:'rock'},
        { id:'order', name:'orden'},
        { id:'fire', name:'fuego'},
        { id:'south', name:'sur'},
        { id:'problem', name:'problema'},
        { id:'piece', name:'pieza'},
        { id:'told', name:'dicho'},
        { id:'knew', name:'Sabía'},
        { id:'pass', name:'pasar'},
        { id:'since', name:'desde'},
        { id:'top', name:'parte superior'},
        { id:'whole', name:'todo'},
        { id:'king', name:'Rey'},
        { id:'space', name:'espacio'},
        { id:'heard', name:'Oído'},
        { id:'best', name:'mejor'},
        { id:'hour', name:'hora'},
        { id:'better', name:'mejor'},
        { id:'true', name:'cierto'},
        { id:'during', name:'durante'},
        { id:'hundred', name:'cien'},
        { id:'five', name:'cinco'},
        { id:'remember', name:'recuerda'},
        { id:'step', name:'paso'},
        { id:'early', name:'temprano'},
        { id:'hold', name:'sostener'},
        { id:'west', name:'Oeste'},
        { id:'ground', name:'suelo/tierra'},
        { id:'interest', name:'interesar'},
        { id:'reach', name:'alcanzar'},
        { id:'fast', name:'rápido'},
        { id:'verb', name:'verbo'},
        { id:'sing', name:'canta'},
        { id:'listen', name:'éscucha'},
        { id:'six', name:'seis'},
        { id:'table', name:'mesa'},
        { id:'travel', name:'viajar'},
        { id:'less', name:'Menos'},
        { id:'Morning', name:'Mañana'},
        { id:'ten', name:'Diez'},
        { id:'simple', name:'sencillo'},
        { id:'several', name:'varios'},
        { id:'vowel', name:'vocal'},
        { id:'toward', name:'hacia'},
        { id:'war', name:'guerra'},
        { id:'lay', name:'lacio'},
        { id:'against', name:'en contra'},
        { id:'pattern', name:'patrón'},
        { id:'slow', name:'lento'},
        { id:'center', name:'centrar'},
        { id:'love', name:'amor'},
        { id:'person', name:'persona'},
        { id:'money', name:'dinero'},
        { id:'serve', name:'servir'},
        { id:'appear', name:'Aparecer'},
        { id:'road', name:'carretera/camino'},
        { id:'map', name:'mapa'},
        { id:'rain', name:'lluvia'},
        { id:'rule', name:'regla'},
        { id:'govern', name:'gobernar'},
        { id:'pull', name:'jalar'},
        { id:'cold', name:'frío'},
        { id:'notice', name:'darse cuenta'},
        { id:'voice', name:'voz'},
        { id:'unit', name:'unidad'},
        { id:'power', name:'poder'},
        { id:'town', name:'pueblo'},
        { id:'fine', name:'multa/fino/sutil'},
        { id:'certain', name:'certero'},
        { id:'fly', name:'volar/mosca'},
        { id:'fall', name:'otoño'},
        { id:'lead', name:'dirigir'},
        { id:'cry', name:'llorar'},
        { id:'dark', name:'oscuro'},
        { id:'machine', name:'maquina'},
        { id:'note', name:'Nota'},
        { id:'wait', name:'Espere'},
        { id:'plan', name:'plan'},
        { id:'figure', name:'figura'},
        { id:'star', name:'estrella'},
        { id:'box', name:'caja'},
        { id:'noun', name:'sustantivo'},
        { id:'field', name:'campo'},
        { id:'rest', name:'descanso'},
        { id:'correct', name:'correcto'},
        { id:'able', name:'capaz/hábil'},
        { id:'pound', name:'libra'},
        { id:'done', name:'hecho'},
        { id:'beauty', name:'belleza'},
        { id:'drive', name:'manejar'},
        { id:'stood', name:'destacado'},
        { id:'contain', name:'Contiene'},
        { id:'front', name:'frente'},
        { id:'teach', name:'enseñar'},
        { id:'week', name:'semana'},
        { id:'final', name:'final'},
        { id:'gave', name:'Dio'},
        { id:'green', name:'verde'},
        { id:'oh', name:'Oh'},
        { id:'quick', name:'rápido'},
        { id:'develop', name:'desarrollar'},
        { id:'ocean', name:'Oceano'},
        { id:'warm', name:'calentar'},
        { id:'free', name:'gratis/libre'},
        { id:'minute', name:'minuto'},
        { id:'strong', name:'fuerte'},
        { id:'special', name:'especial'},
        { id:'mind', name:'mente'},
        { id:'behind', name:'detrás de/ por detrás'},
        { id:'clear', name:'claro'},
        { id:'tail', name:'cola'},
        { id:'produce', name:'Produce'},
        { id:'fact', name:'hecho'},
        { id:'street', name:'calle'},
        { id:'inch', name:'pulgada'},
        { id:'multiply', name:'multiplicar'},
        { id:'nothing', name:'nada'},
        { id:'course', name:'curso'},
        { id:'stay', name:'permanecer'},
        { id:'wheel', name:'rueda'},
        { id:'full', name:'completo'},
        { id:'force', name:'fuerza'},
        { id:'blue', name:'azul'},
        { id:'object', name:'objeto'},
        { id:'decide', name:'decidir'},
        { id:'surface', name:'superficie'},
        { id:'deep', name:'profundo'},
        { id:'moon', name:'Luna'},
        { id:'island', name:'isla'},
        { id:'foot', name:'pie'},
        { id:'system', name:'sistema'},
        { id:'busy', name:'ocupado'},
        { id:'test', name:'prueba'},
        { id:'record', name:'grabar'},
        { id:'boat', name:'barco/bote'},
        { id:'common', name:'común'},
        { id:'gold', name:'oro'},
        { id:'possible', name:'posible'},
        { id:'plane', name:'avión'},
        { id:'stead', name:'lugar'},
        { id:'dry', name:'seco'},
        { id:'wonder', name:'preguntarse'},
        { id:'laugh', name:'risa'},
        { id:'thousand', name:'mil'},
        { id:'ago', name:'hace'},
        { id:'ran', name:'corrió'},
        { id:'check', name:'comprobar'},
        { id:'game', name:'juego'},
        { id:'shape', name:'forma'},
        { id:'equate', name:'aquiparar'},
        { id:'hot', name:'calinete'},
        { id:'miss', name:'perder'},
        { id:'brought', name:'trajo'},
        { id:'heat', name:'calor'},
        { id:'snow', name:'nieve'},
        { id:'tire', name:'neumático'},
        { id:'bring', name:'traer'},
        { id:'yes', name:'sí'},
        { id:'distant', name:'distante'},
        { id:'fill', name:'llenar'},
        { id:'east', name:'este'},
        { id:'paint', name:'pintar'},
        { id:'languaje', name:'idioma'},
        { id:'among', name:'entre'},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
        { id:'', name:''},
    ]
    return (
        <Container>
            <Typography style={{ paddingTop: '5rem', color: 'white' }} align='center' variant='h4'>Palabras en Ingles</Typography>
            <div align='center'>
            <Paper style={{width:'345px'}} className={classes.root}>
                <Pagination  count={10} shape='rounded' variant='outlined' color='secondary' />
            </Paper>
            </div>
            <Container maxWidth='md'>
            <Paper style={{marginTop:'2rem'}}>
                <TableContainer style={{maxHeight:440}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>N°</TableCell>
                                <TableCell>Palabra</TableCell>
                                <TableCell></TableCell>
                                <TableCell>Traduccion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                             palabras.map((d,index)=>(
                                <TableRow key={index}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell style={{maxWidth:'50px'}} >
                                        <Typography>{d.id}</Typography>
                                    </TableCell>
                                    <TableCell  align='center'>
                                    <Button className={classes.styleButton} onClick={() => prueba(d.id)}>=</Button>
                                    </TableCell>
                                    <TableCell >
                                        <Typography id={d.id} style={{ display: 'none',maxWidth:'50px' }} >{d.name}</Typography>
                                    </TableCell>
                                </TableRow>
                             ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            </Container>
            {/* <Grid container spacing={3} style={{ marginTop: '2rem' }} >
                {palabras.map((d, index) => (
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
            </Grid> */}
        </Container>
    )
}

export default Palabras
