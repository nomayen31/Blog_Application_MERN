import { TextField, Box, Button, Typography, styled } from '@mui/material';
import React from 'react'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login_image' />
                <Wrapper>
                <TextField variant='standard'></TextField>
                <TextField variant='standard'></TextField>
                <Button variant='contained'>Login</Button>
                <Typography  style={{ textAlign: 'center' }}>OR</Typography>
                <Button >Create An Account</Button>
                </Wrapper>
            </Box>
        </Component>
    )
}

export default Login