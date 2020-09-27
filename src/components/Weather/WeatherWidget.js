import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeatherCard from './WeatherCard';

const apiKey = '17e8f6a44f72d88b45e4f486f7c027ae';
const cityName = 'Kyiv';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 600,
    },
    media: {
        paddingBottom: '40%',
        backgroundColor: theme.palette.primary.light,
    },
}));

const getWeatherFromServer = (setWeather) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=ua`
    )
        .then((response) => response.json())
        .then((weather) => {
            setWeather(weather);
        });
};

const WeatherWidget = () => {
    const classes = useStyles();
    const [weather, setWeather] = useState('');
    useEffect(() => {
        getWeatherFromServer(setWeather);
    }, []);

    let sendData = false;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes?.media}
                    image={`https://source.unsplash.com/1600x900/?nature,${cityName}}`}
                    title={cityName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {weather?.city?.name}
                    </Typography>

                    <Grid container spacing={3}>
                        {weather?.list?.map((day) => {
                            return (
                                <WeatherCard weatherData={day} key={day.dt} />
                            );
                        })}
                    </Grid>

                    {/* <Typography
                        variant="body2"
                        color="textSecondary"
                        component="pre"
                    >
                        {JSON.stringify(weather?.list, null, '    ')}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    disabled={sendData}
                    onClick={() => getWeatherFromServer(setWeather)}
                >
                    Update
                </Button>
            </CardActions>
        </Card>
    );
};

export default WeatherWidget;
