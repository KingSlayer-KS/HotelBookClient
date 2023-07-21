import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import axios from "axios";
import { Dots } from "./Dots";
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
  rem,
  createStyles,
} from "@mantine/core";

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
      const res = await axios.post(
        "http://54.234.178.57:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res.data);
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const useStyles = createStyles((theme) => ({
    wrapper: {
      position: "relative",
      paddingTop: rem(120),
      paddingBottom: rem(80),

      [theme.fn.smallerThan("sm")]: {
        paddingTop: rem(80),
        paddingBottom: rem(60),
      },
    },

    inner: {
      position: "relative",
      zIndex: 1,
    },

    dots: {
      position: "absolute",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],

      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    dotsLeft: {
      left: 0,
      top: 0,
    },

    title: {
      textAlign: "center",
      fontWeight: 800,
      fontSize: rem(40),
      letterSpacing: -1,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      marginBottom: theme.spacing.xs,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
        textAlign: "left",
      },
    },

    highlight: {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },

    description: {
      textAlign: "center",

      [theme.fn.smallerThan("xs")]: {
        textAlign: "left",
        fontSize: theme.fontSizes.md,
      },
    },

    controls: {
      marginTop: theme.spacing.lg,
      display: "flex",
      justifyContent: "center",

      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column",
      },
    },

    control: {
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.md,
      },

      [theme.fn.smallerThan("xs")]: {
        height: rem(42),
        fontSize: theme.fontSizes.md,

        "&:not(:first-of-type)": {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
  }));

  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Paper radius="md" p="xl">
          <Container>
          <Container>
            <Text size="lg" weight={500}>
              Welcome to Indventure Holidays, Login with
            </Text>{" "}
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
                <Button
                  variant="default"
                  type="submit"
                  radius="xl"
                  disabled={loading}
                  onClick={handleClick}
                >
                  Login
                </Button>
                <Button
                  variant="light"
                  type="submit"
                  radius="xl"
                  disabled={loading}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Button>
              </Group>
            </form>
          </Container>
          </Container>
        </Paper>
      </div>
    </Container>
  );
}
