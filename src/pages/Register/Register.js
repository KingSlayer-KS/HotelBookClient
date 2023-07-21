import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Button,
  Container,
} from "@mantine/core";
const UserForm = () => {
  const navigate = useNavigate();
  const [User, createUser] = useState({});

  const [Message, setMessage] = useState();

  const HandleChange = (e) => {
    createUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const NewUser = {
    ...User,
  };
  console.log(NewUser);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://54.234.178.57:8800/api/auth/register`,
        NewUser,
        { withCredentials: true }
      );
      setMessage(res.data.Message);

      res.status === 200 && navigate("/login");
    } catch (error) {}
  };

  return (
    <Container style={{ height: "100vh", marginTop: "200px" }}>
      <div>
        <Paper radius="md" p="xl">
          <Text size="lg" weight={500}>
            Welcome to Indventure Holidays, Register with
          </Text>
          <form>
            <div>
              <div style={{ padding: "10px 0 " }}>
                <div>
                  <lable>Full Name</lable>
                  <TextInput
                    id="Name"
                    onChange={HandleChange}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  ></TextInput>
                </div>

                <div style={{ padding: "10px 0 " }}>
                  <lable>Date Of Birth</lable>
                  <TextInput
                    id="DOB"
                    onChange={HandleChange}
                    type="date"
                    placeholder="Date Of Birth"
                    required
                  ></TextInput>
                </div>

                <div style={{ padding: "10px 0 " }}>
                  <lable>Enter Your Email</lable>
                  <TextInput
                    id="Email"
                    onChange={HandleChange}
                    type="email"
                    placeholder="Enter Your email"
                    required
                  ></TextInput>
                </div>
                <div style={{ padding: "10px 0 " }}>
                  <lable>Password</lable>
                  <PasswordInput
                    id="Password"
                    onChange={HandleChange}
                    type="password"
                    placeholder="Enter Your password"
                    required
                  ></PasswordInput>
                </div>

                <div style={{ padding: "10px 0 " }}>
                  <lable>Mobile Number</lable>
                  <TextInput
                    id="MobNo"
                    onChange={HandleChange}
                    type="number"
                    maxLength={10}
                    placeholder="Enter Your Mobile Number"
                    required
                  ></TextInput>
                </div>

                <div style={{ padding: "10px 0 " }}>
                  <lable>Address</lable>
                  <TextInput
                    id="Address"
                    onChange={HandleChange}
                    type="text"
                    placeholder="Enter Your Address"
                    required
                  ></TextInput>
                </div>

                <div style={{ padding: "10px 0 " }}>
                  <lable>Aadhar Number</lable>
                  <TextInput
                    id="PanNo"
                    onChange={HandleChange}
                    type="text"
                    placeholder="Enter Your Aadhar Number"
                    required
                  ></TextInput>
                </div>
              </div>

              <Button
                variant="default"
                type="submit"
                radius="xl"
                onClick={HandleSubmit}
              >
                <span>Create New Account</span>
              </Button>
              {Message && <p>{Message}</p>}
            </div>
          </form>
        </Paper>
      </div>
    </Container>
  );
};

export default UserForm;
