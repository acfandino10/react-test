import { useState, cloneElement } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import moment from "moment";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import { Star, StarBorderOutlined } from "@mui/icons-material";
// import { features } from "pages/plans";

export type MovieCardProps = {
  imageLink: string;
  originalTitle: string;
  overview: string;
  releaseDate: Date;
  voteCount: number;
  voteAverage: number;
  onButtonAction: () => void;
};
export default function MovieCard({
  imageLink,
  originalTitle,
  overview,
  releaseDate,
  voteCount,
  voteAverage,
  onButtonAction,
}: MovieCardProps) {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <Card sx={{ padding: 5, margin: 5, maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="194"
        image={imageLink}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {originalTitle}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {overview}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {moment(releaseDate).format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <Typography variant="body2">
          {new Array(parseInt(voteAverage.toString().split(".")[0]))
            .fill("0")
            .map((el, i) => (
              <Star key={i} />
            ))}
          {new Array(parseInt((10 - voteAverage).toString().split(".")[0]))
            .fill(0)
            .map((el, i) => (
              <StarBorderOutlined key={i} />
            ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onButtonAction}>
          Click
        </Button>
      </CardActions>
    </Card>
  );
}
