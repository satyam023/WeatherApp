import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}) {
    let INIT_URL = "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 , height:400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>  
                       <p>Temperature = {info.temp}&deg;C</p>
                       <p>Humidity= {info.humidity}&deg;C </p>
                       <p>Min Temp = {info.tempMin}&deg;C </p>
                       <p>Man Temp = {info.tempMax}&deg;C </p>
                       <p>The weather can be described as <b>{info.weather}  </b> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
