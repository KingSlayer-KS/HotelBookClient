import { Menu, Avatar,  } from "@mantine/core";
import { IconSettings, IconArrowsLeftRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
export default function Demo() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar color="cyan" radius="xl">
          U
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Menu</Menu.Label>
        <Link to="/userDashboard">
          <Menu.Item icon={<IconSettings size={14} />}>Dashboard</Menu.Item>
        </Link>
        <Menu.Item
          color="red"
          onClick={() => {
            handleClick();
          }}
          icon={<IconArrowsLeftRight size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
