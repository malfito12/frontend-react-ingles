import { Collapse, IconButton, ListItemIcon, ListItemText } from '@material-ui/core'
import { Drawer, List, ListItem } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: '200px',
        background: '#141e30'
    },
    textColor: {
        color: 'white'
    }
}))
const DrawerMenu = () => {
    const classes = useStyles()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openBasico, setOpenBasico] = useState(false)

    const openCloseDrawerMenu = () => {
        setOpenDrawer(!openDrawer)
    }
    //-----------------------BASICO-------------------------------
    const openCloseBasico = () => {
        setOpenBasico(!openBasico)
    }
    //-----------------------BASICO-------------------------------
    //-----------------------BASICO-------------------------------
    //-----------------------BASICO-------------------------------
    //-----------------------BASICO-------------------------------

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={openCloseDrawerMenu}
                anchor='right'
                classes={{ paper: classes.drawerPaper }}

            >
                <List >
                    <ListItem
                        divider
                        button
                        onClick={openCloseBasico}>
                        <ListItemIcon>
                            <ListItemText className={classes.textColor}>Basico</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <Collapse
                        in={openBasico}
                        unmountOnExit
                        timeout='auto'
                    >
                        <List>
                            <ListItem divider button component={Link} to='/tobeverbs' onClick={openCloseDrawerMenu}>
                                <ListItemIcon>
                                    <SendIcon color='primary' fontSize='small' />
                                </ListItemIcon>
                                <ListItemText style={{color:'white'}}>Verbo To Be</ListItemText>
                            </ListItem>
                            <ListItem divider button component={Link} to='/proNombres' onClick={openCloseDrawerMenu}>
                                <ListItemIcon >
                                    <SendIcon color='primary' fontSize='small' />
                                </ListItemIcon>
                                <ListItemText style={{color:'white'}}>Pro-Nombres</ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem
                        divider
                        button
                        component={Link} to='/palabras'
                        onClick={openCloseDrawerMenu}>
                        <ListItemIcon>
                            <ListItemText className={classes.textColor}>Palabras</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/verbos'
                        onClick={openCloseDrawerMenu}>
                        <ListItemIcon>
                            <ListItemText className={classes.textColor}>Verbos</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText className={classes.textColor}>Presente</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText className={classes.textColor}>Futuro</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={openCloseDrawerMenu} color='inherit'>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerMenu
