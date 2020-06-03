import React, { useState } from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  TextField,
  InputBase,
  InputLabel
} from '@material-ui/core';


export default function Contribute() {
  const classes = useStyles();
  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={6}>
        ¿Como puedes aportar?
        </Grid>
        <Grid item xs={6}>
          <form
            onSubmit={ event => submitForm(event)}
            action="https://formspree.io/maypowkp"
            method="POST"
            encType="multipart/form-data"
            className={classes.form}
          >
            <label>Nombre:</label>
            <input type="text" name="name" />
            <label>Correo electronico:</label>
            <input type="email" name="email" />
            <label>Título:</label>
            <input type="text" name="title" />
            <label>Autor:</label>
            <input type="text" name="author" />
            <label>Descripción:</label>
            <input type="text" name="description" />
            <label>Foto:</label>
            <input type="file" name="upload" />
            {status === "SUCCESS" ? (
            <p>¡Muchas gracias por apoyar ColorCayena y a la historia de Barranquilla!</p>
            ) : (
            <button className={classes.buttonform}>Submit</button>)
            }
            {status === "ERROR" && <p>Lo sentimos, ha ocurrido un error, vuelve a intentar el envío.</p>}
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Poppins'
  },
  content:{
    width:'80%'
  },
  form:{
    display: 'flex',
    flexDirection:'column',
    color: theme.palette.darkmode.contrastText,
    fontFamily:'inherit'
  },
  buttonform:{
    maxWidth:'100px',
    color: theme.palette.text.secondary
  }
}));
