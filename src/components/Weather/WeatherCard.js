import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 600,
    },
    paper: {
        padding: '1rem',
        position: 'relative',
        minHeight: '50px',
        minWidth: '100px',
        color: theme.palette.info.light,
    },
    temp: {
        position: 'absolute',
        right: '2px',
        bottom: '2px',
        fontSize: '30px',
        color: theme.palette.info.light,
    },
    day: {
        fontSize: '12px',
        color: 'white',
        opacity: '.8',
    },
    media: {
        height: '50px',
        width: '50px',
        backgroundSize: 'contain',
        position: 'absolute',
        top: 0,
        right: 0,
    },
}));

const WeatherCard = ({ weatherData }) => {
    const classes = useStyles();
    const temp = Math.ceil(+weatherData?.main?.temp - 273.15);
    return (
        <Grid item xs={6} sm={3} lg={2}>
            <Paper
                className={classes.paper}
                style={{ background: `hsl(${21 - temp * 10}, 30%, 30%)` }}
            >
                <Box className={classes.day}>
                    {new Date(weatherData?.dt * 1000).toLocaleString()}
                </Box>
                <Box className={classes.temp}>
                    {weatherData.temp}
                    {temp} C
                </Box>
                <Box>{weatherData?.weather[0].description}</Box>
                <CardMedia
                    className={classes.media}
                    image={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon.replace(
                        'n',
                        'd'
                    )}@2x.png`}
                />
            </Paper>
        </Grid>
    );
};

export default WeatherCard;
