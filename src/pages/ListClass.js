import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import ClassCard from "../components/ClassCard";

export default function ListClasses() {
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        setFetch(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // return fetch.map((f) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {fetch.map((f) => (
          <Grid item key={f.id} xs={12} md={6} lg={4}>
            <ClassCard f={f} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
