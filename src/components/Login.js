import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <h3 className="service-name">Autentificare</h3>
        <div className="form-container">
          <div className="user-container">
            <TextField
              sx={{ m: 1, width: "25ch" }}
              id="user"
              label="Utilizator"
              variant="outlined"
              value={user}
              onChange={(e) => {
                setUser(e.currentTarget.value);
              }}
            />
          </div>
          <div className="pass-container">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Parola
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prevValue) => !prevValue)}
                      onMouseDown={(e) => e.preventDefault()}
                      // edge="false"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Parola"
              />
            </FormControl>
          </div>
        </div>
        <Button size="large" variant="outlined" color="primary" id="auth">
          {/* !to modify */}
          <Link href="dashboard">Autentificare</Link>
        </Button>
        <p>
          Creare{" "}
          <Link href="request" underline="always">
            {"programare"}
          </Link>{" "}
          nouă
        </p>
      </div>
    </div>
  );
};

export default Login;
