import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeatherWidget from './Weather/WeatherWidget';

const containerStyle = makeStyles((theme) => ({
    container: {
        padding: '70px 0 60px 0',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
}));

const TheContent = () => {
    const style = containerStyle();
    return (
        <Container className={style.container}>
            <WeatherWidget />
        </Container>
    );
};

export default TheContent;
