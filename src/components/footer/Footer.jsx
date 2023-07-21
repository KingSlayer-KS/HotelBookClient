import { createStyles, Image } from "@mantine/core";

import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconMapPin,
  IconPhone,
  IconBrandGmail
} from "@tabler/icons-react";
import logo from "../../pages/Assets/Logo.jpg";
import razorpay from "./razorpay-logo.png"

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));


const Links = [
  {
    title: "Links",
    links: [
      {
        link: <IconMapPin size="2.5rem" />,
        label: "C916, 3rd floor sector-7 Dwarka Near Ramphal chowk, New Delhi-110075(Office close shifted in mumbai)",
      },
      {
        link: <IconMapPin size="2.5rem" />,
        label: "New Office : Shop No 64, level 2 floor, Dewan Center S. V AXIS BANK road, Jogeshwar west mumbai maharashtra 400102",
      },
      {
        link: <IconPhone size="1rem" />,
        label: "1800 419 9637",
      },
      {
        link: <IconBrandGmail size="2.5rem" />,
        label: "info@indventureholidays.in",
      },
      {
        link: <IconBrandGmail size="2.5rem" />,
        label: "reservation@indventureholidays.in",
      },
    ],
  },
];
const Linksi = [
  {
    title: "Conatct",
    links: [
      {
        link: "/",
        label: "Home",
      },
      {
        link: "aboutus",
        label: "About Us",
      },
      {
        link: "intro",
        label: "Introduction",
      },
      {
        link: "whyus",
        label: "Why Us?",
      },
    ],
  },
];

function FooterLinks() {
  const { classes } = useStyles();

  const groups = Linksi?.map((group) => {
    const links = group.links.map((link) => (
      <Text
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const groupsi = Links?.map((group) => {
    const links = group.links.map((link) => (
      <Text
      >
       <div style={{display:"flex"}}>{link.link}:<Text fz="xs">{link.label}</Text></div> 
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <img src={logo} style={{height:"4.5rem"}}/>
          <Text size="xs" color="dimmed" className={classes.description}>
          The world is changing all around us. To continue to thrive as a business over the next ten years and beyond, we must look ahead, understand the trends and forces that will shape our business in the future and move swiftly to prepare for what's to come.          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
        <div className={classes.groups}>{groupsi}</div>
      </Container>

      <Container className={classes.afterFooter}>
      <Text color="dimmed" size="sm">
          <div style={{display:"flex"}}>Secured Payments By: <Image maw={100} mx={"0.1rem"} radius="md" src={razorpay} alt="Razorpay Logo" /></div>
        </Text>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default FooterLinks;
