import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const toolbarStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TheToolbar = () => {
    const classes = toolbarStyles();
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Test react application
                    </Typography>
                    <Button color="inherit">Some button</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TheToolbar;
