import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  rem,
} from "@mantine/core";
import UserMenu from "./UserMenu"
import logo from "../../pages/Assets/Logo.jpg";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import {useContext} from "react"
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    backgroundColor:"63CAE1",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function HeaderMegaMenu() {
  const { user } = useContext(AuthContext);
  // const  user  = true;
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
    
          <img src={logo} style={{ width: "6rem" }}></img>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to="/">
              <span className={classes.link}>Home</span>
            </Link>
            <Link to="/AboutUs">
              <span className={classes.link}>About Us</span>
            </Link>
            <Link to="/intro">
              <span className={classes.link}>Intro</span>
            </Link>
            <Link to="/WhyUs">
              <span className={classes.link}>Why Us?</span>
            </Link>
          </Group>
          <Group className={classes.hiddenMobile}>
          {user? <UserMenu/>:<Link to="login">
            <Button variant="default">Log in</Button>
          </Link>}
        
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
      >
      
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
        <Link to="/">
          <span className={classes.link}>Home</span>
        </Link>
        <Link to="/AboutUs">
          <span className={classes.link}>About Us</span>
        </Link>
        <Link to="/intro">
          <span className={classes.link}>Intro</span>
        </Link>
        <Link to="/WhyUs">
          <span className={classes.link}>Why Us?</span>
        </Link>
        <Divider
          my="sm"
          color= "gray.1"
        />
        <Group position="center" grow pb="xl" px="md">
        {user? <UserMenu/>:<Link to="login">
            <Button variant="default">Log in</Button>
          </Link>}
        

        </Group>
      </Drawer>
    </Box>
  );
}
