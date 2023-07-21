import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  rem,
} from "@mantine/core";
import { IconMapPinFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

function BadgeCard({
  id,
  image,
  title,
  description,
  amenities,
  location,
  type,
}) {
  const { classes } = useStyles();

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
              <Badge size="sm">{type}</Badge>
              <Text fz="sm" c="dimmed">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconMapPinFilled size={rem(18)} />
                  {` ${location}`}
                  {"  "}
                </div>
              </Text>
            </Text>

            <Badge size="sm">{amenities}</Badge>
          </Group>
          <div style={{ height: "11rem" }}>
            <Text fz="sm" m="xs">
              {description}
            </Text>
          </div>
        </Card.Section>

        <Group mt="xs">
          <button
            style={{
              flex: 1,
              backgroundColor: "#00ACEE",
              color: "white",
              fontWeight: 800,
              padding: "0.2rem 1rem",
              border: 0,
              borderRadius: "10px",
              width: "90%",
            }}
          >
            <Link to={`/hotels/${id}`}>Book Now</Link>
          </button>
        </Group>
      </Card>
    </>
  );
}

export default BadgeCard;
