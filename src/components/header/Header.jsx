import {
  createStyles,
  Container,
  Title,
  Button,
  Text,
  rem,
} from "@mantine/core";
import HeaderImg from "./HeaderImg.jpg";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${HeaderImg})`,
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    color: "white",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),
    "&:hover": {
      color: "black",
    },
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export default function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Want to Travel the World?</Title>

            <Title className={classes.description} mt={30}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#EE2B77", to: "#64CAE1" }}
              >
                Become A member
              </Text>
            </Title>

            <Link to="/register">
              <Button
                variant="default"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
