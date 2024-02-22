// React dependencies:
import React from 'react';
import { useState, useEffect } from 'react';
//import axios from 'axios';
// Material UI components:
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {Avatar} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';

// Props used to explicitly mention the type of parent component 'handleSubmit'.
interface Props {
    handleSubmit:() => void;
}

// Login functional component
const Login: React.FC<Props> = ({handleSubmit}) => {
    // useState hooks for storing and referring the data.
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [redirectTo, setRedirectTo] = useState(null);

    return (
    <Container component="main" maxWidth="md">
        <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "white"
        }}
        >
            <Typography component="h1" variant="h2">
                Welcome
            </Typography>
            <Avatar alt="Example Alt" src="/GeethanjaliLogo.png"
            style={{height: "150px", width: "150px"}} 
            />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="username"
                autoFocus
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                <FormControl sx={{ mt: 1 }} fullWidth variant="outlined">
                <TextField
                margin="normal"
                required
                fullWidth
                id="Password"
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon/>
                      </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    )
                  }}
                />
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    disabled={userName == "" || password == ""}
                    style={{margin: 'auto', display: "flex", marginTop: "20px"}}
                    startIcon={<LoginIcon/>}
                    // onClick={() => {
                    //   axios.post(`http://${'ip'}:6969/Login`, {
                    //     userName: userName,
                    //     password: password,
                    //   }).then((resp) => {
                    //     if (resp.data["goahead"]) {
                    //       setUserName(resp.data["userName"]);
                    //       setToken(true);
                    //     } else {
                    //       setWrong(true);
                    //     }
                    //   });
                    // }}
                >
                    Login
                </Button>
            </Box>
      </Box>
    </Container>
  );
}

export default Login;