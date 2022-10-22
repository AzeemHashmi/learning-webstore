import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FilterButton from './FilterButton'

const Filters = ({filter, setFilter}) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{backgroundColor: 'rgb(241 241 241)', textAlign: 'center'}}>
      <CardContent>
       <FilterButton filter={filter} setFilter={setFilter}/>
      </CardContent>
     
    </Card>
  )
}

export default Filters