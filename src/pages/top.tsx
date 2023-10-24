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

export default function TopPage() {
  return (
    <>
      <MainAppBar />
      <Container sx={{ padding: 5 }}>
        <h1>Top</h1>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://placekitten.com/g/600/100"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cat cutie Top Movie in the World
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cat Movie Top are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica
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
