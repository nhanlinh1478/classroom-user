import { Button, Container, TextField, Typography } from "@mui/material";

import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateClass() {
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const [classNameErr, setClassNameErr] = useState(false);
  const [sectionErr, setSectionErr] = useState(false);
  const [subjectErr, setSubjectErr] = useState(false);
  const [roomErr, setRoomErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClassNameErr(false);
    setSectionErr(false);
    setSubjectErr(false);
    setRoomErr(false);
    if (className === "") {
      setClassNameErr(true);
    }
    if (section === "") {
      setSectionErr(true);
    }
    if (subject === "") {
      setSubjectErr(true);
    }
    if (room === "") {
      setRoomErr(true);
    }
    // if (className && section && subject && room) {
    //   console.log(className);
    //   console.log(section);
    //   console.log(subject);
    //   console.log(room);
    // }
  };
  const onClickSave = async () => {
    const res = await axios
      .post("http://localhost:8080/classes/addClass", {
        className: className,
        section: section,
        subject: subject,
        room: room,
      })
      .then((response) => {
        return console.log("data added", response.data);
      })
      .catch((error) => {
        return error;
      });
    console.log(res);
  };
  return (
    <Container align="center">
      <Typography variant="h5" color="secondary" align="center">
        Create Classroom
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setClassName(e.target.value)}
          label="ClassName"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={classNameErr}
        ></TextField>
        <TextField
          onChange={(e) => setSection(e.target.value)}
          label="Section"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={sectionErr}
        ></TextField>
        <TextField
          onChange={(e) => setSubject(e.target.value)}
          label="Subject"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={subjectErr}
        ></TextField>
        <TextField
          onChange={(e) => setRoom(e.target.value)}
          label="Room"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={roomErr}
        ></TextField>
        <Button
          color="secondary"
          variant="outlined"
          type="submit"
          align="center"
          component={Link}
          to="/"
          endIcon={<SendOutlinedIcon />}
          onClick={() => onClickSave()}
        >
          Create
        </Button>
      </form>
    </Container>
  );
}
