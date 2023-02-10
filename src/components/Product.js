import React from 'react'
    import { Card,CardActions, CardContent,CardMedia,Typography,Button,Grid} from "@mui/material";

    function Product() {
      return (
        <>
        <Grid container  p={4} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
       <Card sx={{maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom textAlign='center' variant="h5" component="div">
         Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pharetra turpis ultrices lacinia. 
       Integer eu fringilla metus. Morbi lacus ante, pulvinar sit amet interdum nec, condimentum quis lacus.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
     <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 220 }}
       image="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=248&fit=crop&auto=format"
       title="green iguana"
     />
     <CardContent>
       <Typography gutterBottom textAlign='center' variant="h5" component="div">
         Responsive
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pharetra turpis ultrices lacinia. 
       Integer eu fringilla metus. Morbi lacus ante, pulvinar sit amet interdum nec, condimentum quis lacus.
       </Typography> 
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   </Grid>
   <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 220 }}
      image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom textAlign='center' variant="h5" component="div">
        UI/UX
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pharetra turpis ultrices lacinia. 
       Integer eu fringilla metus. Morbi lacus ante, pulvinar sit amet interdum nec, condimentum quis lacus.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Grid>
  </Grid>
  </>
    )}
    
    

export default Product