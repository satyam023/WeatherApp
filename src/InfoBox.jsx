import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
export default function InfoBox({info}) {
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
    let COLD_URL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL  = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    const getImageUrl = (info) => {
        if (info.humidity > 80) {
            return RAIN_URL;
        } else if (info.temp > 45) {
            return HOT_URL;
        } else {
            return COLD_URL;
        }
    };
    
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 360 , height:445,  backgroundColor: "#EDE8DC" }}  >
                <CardMedia
                    sx={{ height: 145 }}
                    image={getImageUrl(info)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {info.city}
                      {
                        info.humidity > 80 ?  
                        <ThunderstormIcon/> : info.temp > 45 ? <WbSunnyIcon/> : <AcUnitIcon/>
                        }

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>  
                       <p id='temp'>{info.temp}&deg;C</p>
                       <p><i>Humidity:</i> {info.humidity}&deg;C </p>
                       <p><i>Min Temp:</i> {info.tempMin}&deg;C </p>
                       <p><i>Max Temp:</i> {info.tempMax}&deg;C </p>
                       <p>The weather can be described as <b>{info.weather}  </b> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
