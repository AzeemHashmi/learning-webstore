import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({detail}) {
    console.log("Entered")
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={detail?.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {detail?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant='h5' color={'green'} >
          {detail?.price}
        </Typography>
      </CardActions>
    </Card>
  );
}
