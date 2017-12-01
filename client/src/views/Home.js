import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";
import WorkOrderKanban from "../components/WorkOrderKanban";
import AuthenticatedComponent from "../containers/AuthenticatedComponent";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <AuthenticatedComponent
            notAuthed={
              <Container>
                <SLink to={"/signup"}>Sign Up</SLink>
                <SLink to={"/login"}>Log In</SLink>
              </Container>
            }
            isAuthed={<Container>{<Navbar />}</Container>}
          />
        </div>
        <AuthenticatedComponent
          notAuthed={
            <div>
              <Container2>
                <Img
                  img
                  src="https://openclipart.org/image/2400px/svg_to_png/277131/beans.png"
                  alt="pic"
                />
                <H1>
                  Please create an account with Roastery to start tracking your
                  inventory.
                </H1>
                <Img
                  img
                  src="https://openclipart.org/image/2400px/svg_to_png/277131/beans.png"
                  alt="pic"
                />
              </Container2>
            </div>
          }
          isAuthed={
            <div
              style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 150
                }}
              >
                <WorkOrderKanban />
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: 300,
                  margin: "80px auto"
                }}
              >
                <Button
                  fluid
                  basic
                  color="grey"
                  onClick={() => this.props.history.push("/new-order")}
                >
                  New Order
                </Button>
                <br />
                <Button
                  fluid
                  basic
                  color="grey"
                  onClick={() => this.props.history.push("/add-item")}
                >
                  Add Item
                </Button>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

const Container = styled.div`
  padding: 15px 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #476a6f;
`;
const SLink = styled(Link)`
  padding: 15px 15px;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #46351d;
  }
`;

const H1 = styled.h1`
  text-align: center;
  padding: 25px;
  color: #46351d;
`;

const Img = styled.img`
  height: 35px;
  justify-content: center;
`;

const Container2 = styled.div`
  padding: 15px 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Home;
