import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

import MainAppBar from "components/MainAppBar";

const imagesUrl = "https://image.tmdb.org/t/p/w500/";
export default function ShowPage() {
  return (
    <>
      <MainAppBar />
      <Container sx={{ padding: 5 }}>
        <h1>Shows</h1>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://placekitten.com/g/200/300"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard Show
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizard Show is about the lizards that are a widespread group of
              squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              Share
            </Button>
            <Button size="small" disabled>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
