import React, { Component } from "react";
import data from "../json/data.json";
import { Container, Grid, Image, Item } from "semantic-ui-react";
import Nav from "./nav.js";
import Two from "./img/two.png";

export default class Accounts extends Component {
  render() {
    const { account } = data.accounts;
    var d = new Date(account[0].lastUpdated).toDateString();
    debugger;
    return (
      <div>
        <Nav />
        <br />
        <br />
        <Container>
          <br />
          <br />
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={4}>
                <Image src={Two} alt="Not found" />
              </Grid.Column>
              <Grid.Column width={9}>
                <Item>
                  <Item.Content>
                    <Item.Header as="h1">Account</Item.Header>
                    <Item.Header as="h4">
                      Account holder:{" "}
                      {account[0].displayedName
                        .toLowerCase()
                        .split(" ")
                        .map(r => r.charAt(0).toUpperCase() + r.substring(1))
                        .join(" ")}
                    </Item.Header>
                    <Item.Header as="h4">
                      Bank: {account[0].accountName}
                    </Item.Header>
                    <Item.Description>
                      Account #: {account[0].accountNumber}
                    </Item.Description>
                    <Item.Description>
                      Account status:{" "}
                      {account[0].accountStatus[0].toUpperCase() +
                        account[0].accountStatus.slice(1).toLowerCase()}
                    </Item.Description>
                    <Item.Description>
                      Account Type:{" "}
                      {account[0].accountType[0].toUpperCase() +
                        account[0].accountType.slice(1).toLowerCase()}
                    </Item.Description>
                    <Item.Extra>
                      Available balance: ${account[0].availableBalance.amount}
                    </Item.Extra>
                    <Item.Extra>Last updated: {d}</Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <div class="ui inverted vertical footer segment form-page">
          <div class="ui container">
            <span>Copyright &copy; 2020.</span> | All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}
