import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    width: "300px",
    padding: "10px"
  },
  header: {
    height: "100px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardContent: {
    height: "50px",
    whiteSpace: "normal"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ListCard({ card }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={card.title}
        subheader={card.subheader}
      />
      <CardMedia
        className={classes.media}
        image={card.image}
        title={card.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.info}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
