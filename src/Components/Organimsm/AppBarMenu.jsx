import React from 'react'
import { AppBar, Button, Grid, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Menu, Toolbar, useTheme } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerMenu from './DrawerMenu'
import { useMediaQuery } from '@material-ui/core'
import { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import { List } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    buttonMenu: {
        marginRight: '1rem',
        color: 'white',
        background: 'green'
    },
    root: {
        '&:hover': {
            backgroundColor: 'green',
            //   backgroundColor: theme.palette.primary.main,
            //   backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,

            },
        }
    },
    hola: {
        '&:hover': {
            display: 'block'
        }
    }
}))

const AppBarMenu = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [vocabulario, setVocabulario] = useState(null)
    const [basico, setBasico] = useState(null)
    const theme = useTheme()
    // console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
    // console.log(isMatch)

    //---------------------VOCABULARIO------------------------------------
    const openCloseMenuVolcabulario=(e)=>{
        setVocabulario(e.currentTarget)
    }
    const handleCloseVocabulario=()=>{
        setVocabulario(null)
    }
    //---------------------BASICO------------------------------------
    const openCloseMenuBasico = (e) => {
        setBasico(e.currentTarget)
    }
    const handleCloseBasico = () => {
        setBasico(null)
    }
    //---------------------BASICO------------------------------------
    //---------------------BASICO------------------------------------
    const handleClose = () => {
        setAnchorEl(null)
    }
    const openCloseMenu = (e) => {
        setAnchorEl(e.currentTarget)

    }
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton color='inherit' component={Link} to='/'>
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flexGrow: 1 }}>Home</Typography>
                    {
                        isMatch ? <DrawerMenu /> : (
                            <Grid container justify='flex-end'>
                                <Button onClick={openCloseMenuVolcabulario} className={classes.buttonMenu} size='small'>Vocabulario</Button>
                                <Button onClick={openCloseMenuBasico} className={classes.buttonMenu} size='small'>Basico</Button>
                                <Button component={Link} to='/palabras' className={classes.buttonMenu} size='small'>Palabras</Button>
                                <Button component={Link} to='/verbos' className={classes.buttonMenu} size='small'>verbos</Button>
                                <Button
                                    className={classes.buttonMenu}
                                    size='small'
                                    onClick={openCloseMenu}
                                >Presente</Button>
                                <Button className={classes.buttonMenu} size='small'>Futuro</Button>
                            </Grid>
                        )
                    }

                </Toolbar>
            </AppBar>
            <Menu
                elevation={0}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id='name-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}


            >
                <List>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='hola' />
                    </ListItem>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='hola2' />
                    </ListItem>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='hola3' />
                    </ListItem>
                </List>
            </Menu>

            {/*--------------------VOLVABULARIO----------------------*/}
            <Menu
                elevation={0}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id='volcabulario'
                anchorEl={vocabulario}
                open={Boolean(vocabulario)}
                onClose={handleCloseVocabulario}
            >
                <List>
                    <ListItem divider button className={classes.root} component={Link} to='/palabras' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Palabras'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/deportes' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Deportes en Ingles'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/fechas' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Fechas en Ingles'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/dias' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Dias de la Semana'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/numeros' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Números en Ingles'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/saludosydespedidas' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Saludos y Despedidas'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/partesdelcuerpo' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Partes del Cuerpo'/>
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/nacionalidades' onClick={handleCloseVocabulario}>
                        <ListItemIcon>
                            <SendIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Nacionalidades en Ingles'/>
                    </ListItem>
                </List>
            </Menu>
            {/*--------------------BASICO----------------------*/}
            <Menu
                elevation={0}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id='basico'
                anchorEl={basico}
                open={Boolean(basico)}
                onClose={handleCloseBasico}

            >
                <List>
                    <ListItem divider button className={classes.root} component={Link} to='/tobeverbs' onClick={handleCloseBasico}>
                        <ListItemIcon >
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='verbo To Be' />
                    </ListItem>
                    <ListItem divider button className={classes.root} component={Link} to='/proNombres' onClick={handleCloseBasico}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Pro-Nombres' />
                    </ListItem>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Pasado' />
                    </ListItem>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Presente' />
                    </ListItem>
                    <ListItem divider button className={classes.root}>
                        <ListItemIcon>
                            <SendIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary='Futuro' />
                    </ListItem>
                </List>
            </Menu>
        </>
    )
}

export default AppBarMenu
