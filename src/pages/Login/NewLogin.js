import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Stack,
  Container,
} from '@mantine/core';

export function Login(props) {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("http://54.234.178.57:8800/api/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          console.log(res.data);
          navigate("/")
          
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
    



  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  return (
    <Container style={{height:"100vh" , marginTop:"200px"}}>
    <Paper radius="md" p="xl" >
      <Text size="lg" weight={500}>
        Welcome to Indventure Holidays, Login with
      </Text>

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          

          <TextInput
            required
            label="Email"
            placeholder="hello@gmail.com"

            radius="md"
            type="text"
            id="username"
            onChange={handleChange}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            radius="md"
            type="password"
            id="password"
            onChange={handleChange}
          />

        
        </Stack>

        <Group position="apart" mt="xl">
        
          <Button variant='default' type="submit" radius="xl" disabled={loading} onClick={handleClick}>
           Login
          </Button>
          <Button variant='light' type="submit" radius="xl" disabled={loading} onClick={()=>{navigate("/register")}}>
           Register
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}