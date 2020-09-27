import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const footerStyle = makeStyles((theme) => ({
    stickToBottom: {
        width: '100vw',
        height: '50px',
        position: 'fixed',
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: '1rem 0',
        boxSizing: 'border-box',
    },
}));

const TheFooter = () => {
    const classes = footerStyle();
    return (
        <Box root="true" className={classes.stickToBottom}>
            <Container>
                <Typography>Some data</Typography>
            </Container>
        </Box>
    );
};

export default TheFooter;
