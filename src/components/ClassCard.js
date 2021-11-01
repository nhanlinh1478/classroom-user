import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    marginTop: "20px",
    marginBottom: "20px",
  },
});
export default function ClassCard({ f }) {
  const classes = useStyles();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={classes.card}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={f.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {f.className}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Teacher: {f.section}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subject: {f.subject}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to="/updateClass"
            color="secondary"
            variant="outlined"
          >
            edit Class
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
