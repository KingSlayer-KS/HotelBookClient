import Table from "./Table/Table";
import Profile from "./Profile/Profile";
import "./DashBoard.css";
import { Container } from "@mantine/core";

const columns = [
  { field: "BookingNo", header: "Booking No" },
  { field: "BookingDate", header: "Booking Date" },
  { field: "Name", header: "Hotel Name" },
  // { field: "Type", header: "Type" },
  { field: "City", header: "City" },
  { field: "State", header: "State" },
  // { field: "NoOfAdults", header: "No. of Adults" },
  // { field: "NoOfChildren", header: "No. of Children" },
  // { field: "NoOfDays", header: "No. of Days" },
  { field: "BookingStatus", header: "Booking Status" },
];
const UserDashboard = () => {
  return (
    <div className="DashBoard">
      <Container>
        <Profile />

        <Table columns={columns} hover={true} striped={true} />
      </Container>
    </div>
  );
};

export default UserDashboard;
