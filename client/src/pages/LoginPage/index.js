import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utils/Forms'
import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";

// create styles
const AuthWrapper = styled(Grid)`
  height: 100vh;
`;

const AuthBackgroundCol = styled(Grid)`
  position: relative;
  background-color: rgba(18, 32, 58, 0.6);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const AuthBody = styled(Box)`
    width: 50%;
    margin: auto;
`;

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateLogin = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const authenticate = (e) => {
        e.preventDefault();

        const validate = validateLogin();

        if (validate) {
            setValidate({});
            setEmail('');
            setPassword('');
            alert('Successfully Login');
        }
    }

    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    return (
        <AuthWrapper container>
            <AuthBackgroundCol item xs={12} md={5} lg={6}>
                <Box className="auth-background-holder"></Box>
                <Box className="auth-background-mask"></Box>
            </AuthBackgroundCol>
            
            <Grid item xs={12} md={7} lg={6} display="flex" alignItems="center" justifyContent="center">
                <AuthBody>
                    <Typography variant="h5">Login to your account</Typography>
                    <Box>
                        <form onSubmit={authenticate} autoComplete="off">
                            <TextField
                                fullWidth
                                margin="normal"
                                type="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={validate.validate && !!validate.validate.email}
                                helperText={validate.validate && validate.validate.email ? validate.validate.email[0] : ''}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={validate.validate && !!validate.validate.password}
                                helperText={validate.validate && validate.validate.password ? validate.validate.password[0] : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePassword}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container alignItems="center" justifyContent="space-between" marginTop="1rem">
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item>
                                    <Link to="/forgot-password">
                                        <Typography variant="body2">Forgot password?</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box textAlign="center" marginTop="1rem">
                                <Button variant="contained" color="primary" fullWidth type="submit">
                                    Log In
                                </Button>
                            </Box>
                        </form>
                        <Box textAlign="center" marginTop="1rem">
                            <Typography variant="body2">No Account? <Link to="/register">Sign up</Link></Typography>
                        </Box>
                    </Box>
                </AuthBody>
            </Grid>
        </AuthWrapper>
    );
}

export default LoginPage;